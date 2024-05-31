'use client';
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar_home = () => {

    const [user] = useAuthState(auth);
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/');
        }
    }, [user, router]);

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            sessionStorage.removeItem('user');
            router.push('/'); 
        })
        .catch((error) => {
            console.error("Sign out error", error);
        });
    };

    return (
        <div className='sticky w-full bg-background-10 flex-row z-10 flexBetween shadow-lg rounded-b-xl'>
            <div className='px-6'>
                <div className='w-16 lg:w-20'>
                    <Link href="/" className="cursor-pointer"><Image src="/malchin_green.png" width={10} height={10} alt="logo" layout="responsive" className="w-24" /></Link>
                </div>
            </div>
            <p className="hidden sm:block px-16 py-2 rounded-lg hover:bg-gray-100 hover:bg-opacity-30 text-white font-spartan regular-20 cursor-pointer">Feed</p>
            <div className='px-6 space-x-6 flex flex-row center'>
                <p className="regular-16 font-spartan text-white">{user ? user.email : 'Unknown'}</p>
                <button 
                    className="bg-transparent text-white hover:bg-gray-100 hover:text-background-10 border-white px-4 py-2 border-2 rounded-md regular-18 font-spartan" 
                    onClick={handleSignOut}>
                        Sign out
                </button>
            </div>
        </div>
      )
}

export default Navbar_home