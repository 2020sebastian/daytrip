import Head from 'next/head'
import { GraphQLClient,  gql} from 'graphql-request'
import Link from "next/link";
import Header from "../components/header" 

const graphcms = new GraphQLClient("https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clj7hvu360po401t28eea01fd/master");

const QUERY = gql`
{
  cities {
    id,
    title,
    slug,
    coverPhoto{
      url
    }
  }
}
`

export async function getStaticProps(){
  const {cities} = await graphcms.request(QUERY);
  return {
    props: {
      cities,
    },
    revalidate: 10,
  };
}

export default function Home({cities}) {
  return (
    <div>
      <Header>
        
      </Header>
    <Head>
        <title>One Day Itineraries</title>
      </Head>

      <main className={"max-w-4xl mx-auto pt-16"}>
      <h1 className={"text-3xl font-bold"}>One Day Itineraries</h1>
      {cities.map((city) => (
        <Link
            href={`/cities/${city.slug}`}
            passHref
            key={city.id}
            legacyBehavior
          >
            <a className="block my-8 border border-black p-4 rounded-lg hover:bg-black hover:text-white">
              <h2 className={"text-xl font-semibold"}>{city.title}</h2>
            </a>
          </Link>
      ))}


    </main>
    </div>
  )
}
