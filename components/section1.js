import Head from 'next/head';
import Link from 'next/link';

export default function Section1({ cities }) {
  return (
    <div>
      <Head>
        <title>One Day Itineraries</title>
      </Head>

      <section className="max-w-4xl mx-auto pt-16">
        <h1 className="text-2xl py-2 text-teal-600 text-center">
          City in a Day: Tailored 24-Hour Itineraries for the Urban Explorer
        </h1>
        <h2 className="text-md py-2 text-gray-800 text-center leading">
          Choose a city below to get started
        </h2>
      </section>

      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          
        {cities.map((city) => (
          <div className="rounded overflow-hidden shadow-lg" key={city.id}>
            
            <Link href={`/cities/${city.slug}`} passHref key={city.id} legacyBehavior>
              <div className="relative">
               <a href={`/cities/${city.slug}`}>
                 <img
                  className="w-full"
                  src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Sunset in the mountains"
                />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              </a>
              <a href="#!">
                <div className="absolute bottom-0 left-0 bg-teal-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                {city.title}
                </div>
              </a>
            </div>
            </Link>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
