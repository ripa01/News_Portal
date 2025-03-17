import Link from 'next/link'
import React from 'react'

const NewsLayout = () => {
  return (
    <div className="py-12">
        <h1 className='text-2xl font-bold mb-8'> Latest News</h1>
        <nav className='mb-4 space-x-4'>
            <Link href='/news' className='text-blue-500 hover:text-blue-600'>All</Link>
            <Link href='/news/sports' className='text-blue-500 hover:text-blue-600'>Sports</Link>
            <Link href='/news/health' className='text-blue-500 hover:text-blue-600'>Health</Link>

        </nav>
        <div className='grid grid-cols-3 gap-4'>
            <div className='bg-gray-200 p-4'>All News</div>
         
      
      
    </div>
    </div>
  );
};

export default NewsLayout