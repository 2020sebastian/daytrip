import { GraphQLClient,  gql} from 'graphql-request'
import Head from "next/head";

const graphcms = new GraphQLClient("https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clj7hvu360po401t28eea01fd/master");

const QUERY = gql`
query Post($slug: String!){
  post(where: {slug: $slug}){
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
  posts{
    slug
  }
 }
`
export async function getStaticPaths(){
    const {posts} = await graphcms.request(SLUGLIST);
    return {
      paths: posts.map((post) => ({params: {slug: post.slug}})),
      fallback: false,
    }
}


export async function getStaticProps({ params }){
  const slug = params.slug;
  const data = await graphcms.request(QUERY, {slug});
  const post = data.post;

  // Check if post is defined
  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function BlogPost({post}){
  const { title, coverPhoto, slug } = post;
  
  return (
    <div className={""}>
      <Head>
        <title>City</title>
      </Head>
      <main className={"max-w-4xl mx-auto pt-16"}>
        <h1 className={"text-3xl font-bold"}>{post.slug}</h1>
      </main>
    </div>
  )

  
}
