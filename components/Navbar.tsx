import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import MobileNav from './MobileNav';

function Navbar() {
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href="/" className='flex items-center gap-1'>
        <Image 
          src="/icons/logo.svg" 
          width={32} 
          height={32} 
          alt="logo" 
          className="max-sm:size-10 bg-blue-1 rounded-lg"
          
        />
        <h1 className='text-3xl font-bold text-white max-sm:hidden'>ViCo</h1>
      </Link>
      <div className='flex-between gap-5'>
        {/*cleark user management*/}

        <MobileNav/>
      </div>
    </nav>
  )
}

export default Navbar