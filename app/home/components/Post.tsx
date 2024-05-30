import React from 'react'
import Comment from './Comment';

interface PostProps {
    email: string; 
    title: string;
    description: string; 
    location: string; 
    salary: string; 
    contact: string; 
  }

const Post = (props: PostProps) => {
    const style = "pt-3 font-spartan text-background-10 text-left regular-24"

    return (
        <div className='p-6 w-full'>
            <div className='border-b-2 pb-4 flex flex-col'>
                <p className='font-spartan text-black text-left regular-24'>{props.email}</p>
                <p className='font-spartan text-black bold-40'>{props.title}</p>
                <p className='font-spartan text-black regular-24 py-10'>{props.description} </p>
                <p className={style}>Location: <span className='text-black'> {props.location} aimag </span></p>
                <p className={style}>Salary: <span className='text-black'> {props.salary} tugrik</span></p>
            </div>

            {/* Comment section */}
            <div className='pt-4 flex flex-col space-y-4'>
                <Comment user="Badraa" comment="how hard is it to go there?"/>
                <Comment user="Badraa" comment="Can I go with my friend?"/>
            </div>
            
        </div>
    )
}

export default Post