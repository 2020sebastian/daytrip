import { GraphQLClient,  gql} from 'graphql-request'
import Format from './layout/format'
import Section1 from '@/components/section1';

const graphcms = new GraphQLClient("https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clj7hvu360po401t28eea01fd/master");

const QUERY = gql`
{
  cities {
    id,
    title,
    slug,
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
    <Format>
       <Section1 cities={cities}></Section1>
    </Format>
  )
}
