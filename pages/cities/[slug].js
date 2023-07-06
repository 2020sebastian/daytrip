import { GraphQLClient,  gql} from 'graphql-request'
import Format from '../layout/format';
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/router';
import Link from 'next/link';


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
      markdown
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
  const router = useRouter();
  
  return (
    <Format>
      <nav aria-label="breadcrumb" class="w-full p-4 text-gray-800">
	<ol class="flex h-8 space-x-2 text-gray-800">
		<li class="flex items-center">
			<Link rel="noopener noreferrer" href="/" title="Back to homepage" class="flex items-center hover:underline">Home</Link>
		</li>
		<li class="flex items-center space-x-1">
			<span class="text-gray-800">|</span>
			<Link rel="noopener noreferrer" href={`/cities/${slug}`} class="flex items-center px-1 capitalize text-gray-400">{title}</Link>
		</li>
	</ol>
</nav>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <div className="post py-10">
            <h1 className="text-4xl font-bold text-center pb-5">{title}</h1>
            </div>
          </div>
          <div className="py-10">
              <img src={coverPhoto.url} alt='' width={900} height={600}></img>
          </div>
          <div className='content text-gray-600'>
            <ReactMarkdown>
              {content.markdown}
            </ReactMarkdown>
          </div>
        </section>
    </Format>
  )
}
