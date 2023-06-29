import Head from 'next/head'
import Link from "next/link";

function section1( {cities} ) {
  return (
    <div>
        <Head>
        <title>One Day Itineraries</title>
      </Head>

    <main className={"max-w-4xl mx-auto pt-16"}>
      <h1 className={"text-3xl font-bold"}>One Day Itineraries</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">

        {cities.map((city) => (
          
          <Link href={`/cities/${city.slug}`} passHref key={city.id} legacyBehavior>
            <a className="block my-8 border border-black p-4 rounded-lg hover:bg-black hover:text-white">
              <h2 className={"text-xl font-semibold"}>{city.title}</h2>
            </a>
          </Link>
          
        ))}
      </div>
    </main>
    </div>
  )
}

export default section1