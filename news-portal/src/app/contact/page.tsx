import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
      <p className="mt-4 text-lg text-gray-700">
        Have questions, feedback, or suggestions? Feel free to reach out to us using the form below.
      </p>

      {/* Contact Form */}
      <form className="mt-8 bg-white p-6 shadow-md rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea
            rows={4}
            placeholder="Write your message here..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* Contact Information */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Our Contact Details</h2>
        <p className="mt-4 text-lg text-gray-700">
          📍 Address: 123 News Street, Media City, NY, USA  
          📧 Email: contact@newsportal.com  
          📞 Phone: +1 234 567 890
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
