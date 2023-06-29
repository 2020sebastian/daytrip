import { GraphQLClient,  gql} from 'graphql-request'
import Format from '../layout/format';

const graphcms = new GraphQLClient("https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clj7hvu360po401t28eea01fd/master");

const QUERY = gql`
query City($slug: String!){
  city(where: {slug: $slug}){
    id,
    title,
    slug,
    coverPhoto{
      url
    }
    content {
      html
    }
  }
}
`;

const SLUGLIST = gql`
{
  cities{
    slug
  }
 }
`
export async function getStaticPaths(){
    const {cities} = await graphcms.request(SLUGLIST);
    return {
      paths: cities.map((city) => ({params: {slug: city.slug}})),
      fallback: false,
    }
}


export async function getStaticProps({ params }){
  const slug = params.slug;
  const data = await graphcms.request(QUERY, {slug});
  const city = data.city;

  // Check if post is defined
  if (!city) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      city,
    },
    revalidate: 10,
  };
}

export default function BlogPost({city}){
  const { title, coverPhoto, slug, content } = city;
  
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <div className="post py-10">
            <h1 className="text-4xl font-bold text-center pb-5">{title}</h1>
            </div>
          </div>
          <div className="py-10">
              <img src={coverPhoto.url} alt='' width={900} height={600}></img>
          </div>
          <div className='content text-gray-600' dangerouslySetInnerHTML={{__html: content.html}} />
        </section>
    </Format>
  )
}
