
import React, { useEffect, useState } from 'react'
import Post from './Post'
import PostPrefix from './PostPrefix'
import CreatePost from './CreatePost';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { Timestamp } from 'firebase/firestore';

interface PostElement{
    id: string,
    email: string, // It's safe to access user.email directly since we checked user is not null
    timestamp: Timestamp,
    title: string,
    salary: string,
    location: string,
    contact: string,
    description: string,
}

const Feed = () => {

    const [posts, setPosts] = useState<PostElement[]>([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            query(collection(db, "posts"), orderBy("timestamp", "desc")), 
            (snapshot) => {
                const postsData = snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                })) as PostElement[]; 
                setPosts(postsData);
            }
        );
        return () => unsubscribe();
    }, [db]);


    const [isCreatePost, setIsCreatePost] = useState(false);

    const handlePostCreation = () => {
        setIsCreatePost(!isCreatePost);
    };

    const [currentPost, setCurrentPost] = useState({ 
        id: "1",
        title: '', 
        description: '', 
        salary: '', 
        location: '',
        email: '',
        contact: '',
        timestamp: Timestamp.now()});
    
    useEffect(() => {
        if (posts.length > 0) {
            setCurrentPost(posts[0]);
        }
    }, [posts]);

    const handleClick = (element: PostElement ) => {
        setCurrentPost({ 
            id: element.id, 
            title: element.title, 
            salary: element.salary, 
            location: element.location, 
            description: element.description, 
            email: element.email, 
            contact: element.contact, 
            timestamp: element.timestamp });
    };

  return (
    <div className='w-full p-10 py-10 flex flex-col'>
        <div className='center pb-10'>
            <button className="w-1/2 btn bg-background-10 hover:bg-background-20 font-spartan text-white bold-28 flex" onClick={handlePostCreation}>Create post</button>
        </div>
        
        {isCreatePost? <CreatePost onclose={handlePostCreation}/> : <></>}
        <div className='w-full flex flex-row justify-between'>
            <div className='w-2/5 pr-10 space-y-6'>
                {
                    posts.map(post => {
                        return <PostPrefix onclick={() => handleClick(post)} email={post.email} title={post.title} location={post.location} salary={post.salary} />
                    })
                }
            </div>
            <div className='w-3/5 border-2 rounded-lg border-gray-400 flex h-fit'>
                <Post 
                    id = {currentPost.id}
                    title={currentPost.title}
                    salary={currentPost.salary} 
                    location={currentPost.location} 
                    description={currentPost.description} 
                    email={currentPost.email} 
                    contact={currentPost.contact}
                    timestamp={currentPost.timestamp}/>
            </div>
        </div>
        
    </div>
  )
}

export default Feed