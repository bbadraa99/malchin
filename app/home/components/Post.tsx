import React, {useEffect, useState} from 'react';
import Comment from './Comment';
import {CommentElements} from './Comment';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuthState } from'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { doc, deleteDoc } from 'firebase/firestore'; // Import deleteDoc and doc


interface PostProps {
    id: string;
    email: string; 
    timestamp: Timestamp;
    title: string;
    description: string; 
    location: string; 
    salary: string; 
    contact: string; 
  }

const Post = (props: PostProps) => {
    const [comments, setComments] = useState<CommentElements[]>([]); // State to hold the list of comments
    const [user] = useAuthState(auth);
    
    if (user) {
        const q = query(collection(db, "posts", props.id, 'comments'), orderBy("timestamp", "desc"));
        const unsubscribe = onSnapshot(q, 
            (snapshot) => {
                const commentsData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    email: doc.data().email,
                    message: doc.data().message,
                    timestamp: doc.data().timestamp,
                })) as CommentElements[];
                setComments(commentsData);
            }
        );
    }
    

    const [comment, setComment] = useState<CommentElements>({id:"12", email: "", message:"", timestamp: Timestamp.now()}); // State to hold the input value

    const postCommment = async () => {
        if (comment.message.trim() !== '' && user) {
            const commentToSend = comment.message
            setComment({...comment, message:''}); 
            await addDoc(collection(db, "posts", props.id, 'comments'), {
                email: user.email,
                message: commentToSend,
                timestamp: serverTimestamp(),
            })
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            postCommment(); 
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setComment({...comment, message:event.target.value}); // Update the state with the input value
    };

    //Handle delete comment
    const deleteComment = async (id: string) => {
        const docRef = doc(db, "posts", props.id, 'comments', id); // Correctly reference the document
        await deleteDoc(docRef); 
    }

    const handleDelete = (id: string) => {
        deleteComment(id);
    }
    

    const style = "pt-2 font-spartan text-background-10 text-left regular-24"

    const getTimeAgo = (timestamp: Timestamp) => {
        if (!timestamp) return '';
        const now = new Date();
        const commentDate = timestamp.toDate();
        const secondsAgo = Math.floor((now.getTime() - commentDate.getTime()) / 1000);
    
        if (secondsAgo < 60) return 'Just now';
        const minutesAgo = Math.floor(secondsAgo / 60);
        if (minutesAgo < 60) return `${minutesAgo} minutes ago`;
        const hoursAgo = Math.floor(minutesAgo / 60);
        if (hoursAgo < 24) return `${hoursAgo} hours ago`;
        const daysAgo = Math.floor(hoursAgo / 24);
        if (daysAgo < 30) return `${daysAgo} days ago`;
        const monthsAgo = Math.floor(daysAgo / 30);
        if (monthsAgo < 12) return `${monthsAgo} months ago`;
        const yearsAgo = Math.floor(monthsAgo / 12);
        return `${yearsAgo} years ago`;
      };

    return (
        <div className='p-6 w-full'>
            <div className='border-b-2 pb-4 flex flex-col'>
                <p className='font-spartan text-black text-left regular-24'>{props.email}</p>
                <p className='font-spartan text-black bold-40'>{props.title}</p>
                <p className='font-spartan text-black regular-24 py-10'>{props.description} </p>
                <p className={style}>Location: <span className='text-black'> {props.location} aimag </span></p>
                <p className={style}>Salary: <span className='text-black'> {props.salary} tugrik</span></p>
            </div>

            <div className='pt-4 w-full flex flex-row '>
                <input 
                    type="text" 
                    placeholder="Discuss here" 
                    className="input input-bordered text-black w-full font-spartan regular-16 border-gray-600 border-2 bg-gray-200"
                    value={comment.message} // Controlled component
                    onChange={handleChange} // Handle input change
                    onKeyDown={handleKeyDown} // Handle Enter key 
                />
                <button 
                    className="btn ml-2 font-spartan bold-16 bg-background-10 hover:bg-background-20 text-white"
                    onClick={postCommment}
                >
                    Post
                </button>
                
            </div>

            {/* Comment section */}
            <div className='pt-4 flex flex-col space-y-4'>
                {
                    comments.map(comment => {
                        const isCommentUser: boolean = user ? user.email === comment.email : false;
                        return <Comment email={comment.email} message={comment.message} timestamp={comment.timestamp} onclick={() => handleDelete(comment.id)} isUser={isCommentUser}/>
                    })
                }
            </div>
            
        </div>
    )
}

export default Post