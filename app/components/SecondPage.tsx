import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


const SecondPage = () => {
  return (
    <div className='h-fit bg-white'>
        <div className='pt-10 md:pt-16 lg:pt-20 center'>
          <div className='flex flex-col'>
            <h1 className='bold-36 font-spartan text-background-10 px-16 center'>Our mission</h1>
            <div className='flex flex-row w-full center space-x-8 pt-20 font-spartan text-gray-600 regular-24 text-center'>
              <FaQuoteLeft className='text-background-10 place-self-start' />
              <p className='w-1/2'>Mongolia, known for its vast livestock populations totaling 64.7 
                million in 2024, relies on its five main domestic animals—sheep, 
                horses, cows, camels, and goats—for basic needs like food and 
                clothing. However, a decline in herders due to urban migration 
                for education and jobs threatens this nomadic heritage. 
                To address this, the "Herder" web application aims to connect those 
                needing herding support with individuals interested in learning or 
                earning through the nomadic lifestyle.  </p>
              <FaQuoteRight className='text-background-10 place-self-end' />
            </div>
          </div>
            
        </div>
        
    </div>
  )
}

export default SecondPage