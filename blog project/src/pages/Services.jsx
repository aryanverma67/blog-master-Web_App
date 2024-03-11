import React from 'react'

const Services = () => {
  return (
    <div>
            <div className="bg-black text-center text-white px-4 py-40">
        <h2 className="text-5xl lg:text-7xl font-bold mb-5 leading-snug">Services Page
        </h2>
      </div>
      <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-8">Our Blog Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Content Creation</h2>
          <p className="text-gray-600">
            Our expert writers create high-quality, engaging content tailored to your audience.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">SEO Optimization</h2>
          <p className="text-gray-600">
            Improve your blog's visibility with our SEO optimization services to reach a wider audience.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Social Media Integration</h2>
          <p className="text-gray-600">
            Increase your blog's reach by integrating social media platforms and engaging with your audience.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Custom Design</h2>
          <p className="text-gray-600">
            Stand out with a unique and custom design that reflects your brand identity.
          </p>
        </div>

        {/* Service 5 */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Analytics and Reporting</h2>
          <p className="text-gray-600">
            Track your blog's performance with detailed analytics and reporting to make informed decisions.
          </p>
        </div>

        {/* Service 6 */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Monetization Strategies</h2>
          <p className="text-gray-600">
            Explore various monetization strategies to turn your blog into a profitable venture.
          </p>
        </div>
      </div>
    </div>
  );
};



      
    </div>
  )
}

export default Services
