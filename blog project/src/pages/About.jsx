import React from 'react'
import Banner from '../components/Banner'

const About = () => {
  return (
    <div>
            <div className="bg-black text-center text-white px-4 py-40">
        <h2 className="text-5xl lg:text-7xl font-bold mb-5 leading-snug">About Page
        </h2>

    </div>
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2">
          <img
            src="/blog.jpg"
            alt="blog website"
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel arcu nec orci
            sollicitudin aliquet vitae vel ex. Nulla facilisi. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus tincidunt semper justo,
            ut volutpat eros imperdiet nec. Integer rutrum mi nec mauris feugiat, nec facilisis
            justo efficitur. Proin auctor tincidunt lacus, in suscipit libero fermentum ut.
          </p>

          <h2 className="text-2xl font-bold my-4">Our Mission</h2>
          <p className="text-gray-600">
            In hac habitasse platea dictumst. Etiam nec tristique elit, nec sagittis mauris. Fusce
            non feugiat purus. Proin id quam id odio dapibus hendrerit vel sit amet sapien.
            Phasellus sodales tincidunt elit, at venenatis lectus convallis id.
          </p>

          <h2 className="text-2xl font-bold my-4">Our Team</h2>
          <p className="text-gray-600">
            Meet our dedicated team of professionals who are passionate about creating valuable
            content and delivering exceptional services to our audience.
          </p>
        </div>
      </div>

  



      </div>

      
    </div>
  )
}

export default About
