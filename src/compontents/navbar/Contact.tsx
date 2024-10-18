import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Contact Me</h2>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 h-32"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
