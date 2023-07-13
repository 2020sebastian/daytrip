// pages/about.js

import Image from 'next/image'  
import Format from './layout/format'

export default function About() {
  return (
    <Format>
      <div className="max-w-3xl mx-auto pt-16 pb-32">

        <h1 className="text-4xl font-bold text-center">Our Story</h1>

        <p className="mt-8 text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor 
          lectus nibh. Cras ultricies ligula sed magna dictum porta. Curabitur 
          aliquet quam id dui posuere blandit.
        </p>

        {/* <Image 
          src="/images/team.jpg"
          width={600}
          height={400}
          alt="Our team"
        /> */}

        <h2 className="mt-16 text-3xl font-bold">Our Mission</h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor 
          lectus nibh. Cras ultricies ligula sed magna dictum porta. Curabitur 
          aliquet quam id dui posuere blandit.
        </p>

        <h2 className="mt-16 text-3xl font-bold">The Team</h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor 
          lectus nibh. Cras ultricies ligula sed magna dictum porta. Curabitur 
          aliquet quam id dui posuere blandit.
        </p>

      </div>
    </Format>
  )
}