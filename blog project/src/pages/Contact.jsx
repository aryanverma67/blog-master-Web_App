import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
                <div className="bg-black text-center text-white px-4 py-40">
        <h2 className="text-5xl lg:text-7xl font-bold mb-5 leading-snug">Contact Us Page
        </h2>
      </div>

    
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600">
            We would love to hear from you! Feel free to reach out with any questions, suggestions,
            or feedback.
          </p>
          <p className="text-gray-600 mt-2">Email: info@yourcompany.com</p>
          <p className="text-gray-600">Phone: +1 123-456-7890</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-orange-500"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-orange-500"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-orange-500"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
      
            
            
            
            
            
            
            
            
