import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    return (
      <div className="bg-blue-500 p-4">
        <div className="container mx-auto">
          <Link href="/" className="text-white text-lg font-bold">
            My Blogs
          </Link>
        </div>
      </div>
    );
  };


export default Navbar