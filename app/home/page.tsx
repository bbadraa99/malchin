'use client';
import Navbar_home from "./components/Navbar_home";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config'; // Adjust the path as necessary
import CreatePost from "./components/CreatePost";
import { useState } from "react";
import Feed from "./components/Feed";


export default function App() {

    const [user, loading, error] = useAuthState(auth);
    const [post, setPost] = useState(false);
    
    return (
        <div className="bg-white">
            <Navbar_home/>
            <Feed/>
            <div className="">
                {post? <CreatePost/> : null}
            </div>
            
        </div>    
    );
}
