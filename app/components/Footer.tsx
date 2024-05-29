import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='bg-background-10 center flex-col py-6'>
        <p className='font-spartan text-white'> Designed and developed by Badraa BatUlzii</p>
        <ul className="menu menu-horizontal bg-transparent rounded-box">
            <li>
                <a href='https://www.linkedin.com/in/badraa-bat-ulzii-5b5b98187/' target='_blank'>
                <Image src="/linkedin.png" alt='instagram' width={20} height={20} />
                </a>
            </li>
            <li>
                <a href='https://www.instagram.com/bdraa_/' target='_blank'>
                <Image src="/instagram.png" alt='instagram' width={20} height={20} />
                </a>
            </li>
            <li>
                <a href='https://github.com/bbadraa99' target='_blank'>
                <Image src="/github.png" alt='instagram' width={20} height={20} />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Footer