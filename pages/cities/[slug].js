import { GraphQLClient,  gql} from 'graphql-request'
import Head from "next/head";

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
  const { title, coverPhoto, slug } = city;
  
  return (
    <div className={""}>
      <Head>
        <title>City</title>
      </Head>
      <main className={"max-w-4xl mx-auto pt-16"}>
        <h1 className={"text-3xl font-bold"}>{city.slug}</h1>
        <img src={coverPhoto.url} alt=''></img>
      </main>
    </div>
  )

  
}
