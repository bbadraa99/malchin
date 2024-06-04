import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='sticky w-full bg-background-10 flex-row z-50 flexBetween shadow-lg rounded-b-xl'>
        <div className='px-6'>
            <div className='w-16 lg:w-20'>
                <p className="p-4 bold-20 text-white font-spartan">Malchin</p>
            </div>
        </div>
        <div className='px-6 space-x-6'>
            <Link href="/sign-in" className="cursor-pointer text-white regular-20 font-spartan">Sign in</Link>
            <button className="bg-transparent text-white hover:bg-gray-100 hover:text-background-10 border-white px-4 py-2 border-2 rounded-md regular-20 font-spartan"><Link href="/sign-up">Join</Link></button>
        </div>
    </div>
  )
}

export default Navbar
