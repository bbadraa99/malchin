import React, { useEffect, useState } from 'react'
import Post from './Post'
import PostPrefix from './PostPrefix'
import CreatePost from './CreatePost';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { Timestamp } from 'firebase/firestore';
import { useAuthState } from'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';

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

    // initialize user and create handler function for deleting the post
    const [user] = useAuthState(auth);


    const [posts, setPosts] = useState<PostElement[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredPosts, setFilteredPosts] = useState<PostElement[]>([]);


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

    useEffect(() => {
        setFilteredPosts(posts.filter(post => 
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.location.toLowerCase().includes(searchQuery.toLowerCase())
        ));
    }, [posts, searchQuery]);


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
        if (filteredPosts.length > 0) {
            setCurrentPost(filteredPosts[0]);
        }
    }, [filteredPosts]);

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

    const handleDeletePost = async (id: string) => {
        const docRef = doc(db, "posts", id);
        deleteDoc(docRef);
    };

  return (
    <div className='w-full p-10 py-10 flex flex-col'>

        <div className='pb-10 flex flex-row space-x-10'>
            <button className="w-fit btn bg-background-10 hover:bg-background-20 font-spartan text-white bold-28 flex" onClick={handlePostCreation}>Create post</button>
            {/* Implement search  */}
            <div className='w-full center pr-30'>
                <input 
                    type="text" 
                    placeholder="Search your dream job" 
                    className="w-1/2 input input-bordered font-spartan regular-18 text-black bg-gray-300 border-gray-400 rounded-full px-10 "
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}/>

            </div>
            
        </div>
        
        {isCreatePost? <CreatePost onclose={handlePostCreation}/> : <></>}
        <div className='w-full flex flex-row justify-between'>
            <div className='w-2/5 pr-10 space-y-6' style={{ maxHeight: '800px', overflowY: 'scroll' }}>
                {
                    filteredPosts.map(post => {
                        const isCommentUser: boolean = user ? user.email === post.email : false;
                        return <PostPrefix onclick={() => handleClick(post)} ondelete={() => {handleDeletePost(post.id)}} email={post.email} title={post.title} location={post.location} salary={post.salary} isUser={isCommentUser}/>
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