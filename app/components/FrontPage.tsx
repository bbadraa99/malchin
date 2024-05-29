import React from 'react'
import Image from 'next/image'

const FrontPage = () => {

  return (
    <div className='h-screen bg-background-10 flex items-center flex-col pt-24 md:pt-0 md:flex-row md:flexBetween px-32'>
      <div className='flex flex-col  space-y-6'>
        <h1 className="bold-32 md:bold-46 lg:bold-64 text-white font-spartan self-center ">Explore the nomadic way <br />Find your dream job </h1>
        <label className="input input-bordered flex items-center gap-2 bg-white text-black font-spartan">
          <input type="text" className="grow" placeholder="Search" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
        </label>
      </div>
      <Image src="/cow.png" width={400} height={400} alt="cow"/>
    </div>
  )
}

export default FrontPage