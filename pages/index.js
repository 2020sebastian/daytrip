import Head from 'next/head'
import { GraphQLClient,  gql} from 'graphql-request'
import BlogCard from './components/BlogCard'
import Link from "next/link";

const graphcms = new GraphQLClient("https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clj7hvu360po401t28eea01fd/master");

const QUERY = gql`
{
  posts {
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
  const {posts} = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function Home({posts}) {
  return (
    <div>
    <Head>
        <title>One Day Itineraries</title>
      </Head>

      <main className={"max-w-4xl mx-auto pt-16"}>
      <h1 className={"text-3xl font-bold"}>One Day Itineraries</h1>
      {posts.map((post) => (
        <Link
            href={`/posts/${post.slug}`}
            passHref
            key={post.id}
            legacyBehavior
          >
            <a className="block my-8 border border-black p-4 rounded-lg hover:bg-black hover:text-white">
              <h2 className={"text-xl font-semibold"}>{post.title}</h2>
            </a>
          </Link>
      ))}


    </main>
    </div>
  )
}
