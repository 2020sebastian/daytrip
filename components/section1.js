import Head from 'next/head'
import Link from "next/link";

export default function section1( {cities} ) {
  return (
    <div>
        <Head>
        <title>One Day Itineraries</title>
      </Head>

    <section className={"max-w-4xl mx-auto pt-16"}>
      <h1 className={"text-2xl py-2 text-teal-600 text-center"}>City in a Day: Tailored 24-Hour Itineraries for the Urban Explorer</h1>
      <h2 className={"text-md py-2 text-gray-800 text-center leading-8"}>Choose a city below to get started</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">

        {cities.map((city) => (
          
          <Link href={`/cities/${city.slug}`} passHref key={city.id} legacyBehavior>
            <a className="block my-8 border border-black p-4 rounded-lg hover:bg-black hover:text-white">
              <h2 className={"text-xl font-semibold"}>{city.title}</h2>
            </a>
          </Link>
        ))}
      </div>
    </section>
    </div>
  )
}