import React from 'react'
import banner from '@/assests/nextjs.jpg'
import Image from 'next/image';

const Banner = () => {
    return (
      <section className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
           <Image src={banner} alt="Next.js" />      
          </div>
  
          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900">
              Stay Updated with the Latest News
            </h2>
            <p className="mt-4 text-gray-600">
              Get the latest updates, breaking news, and insightful articles right at your fingertips. Stay informed with trusted sources and well-researched reports.
            </p>
            <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition">
              Read More
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Banner;
  
