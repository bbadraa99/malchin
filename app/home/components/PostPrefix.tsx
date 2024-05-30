import React from 'react'

interface PostProps {
    email: string;
    title: string;
    location: string; 
    salary: string; 
    onclick: () => void;
  }

const PostPrefix = (props: PostProps) => {
    const style = "pt- font-spartan text-background-10 text-left regular-16"

    return (
        <div className='border-2 border-gray-600 p-3 rounded-lg flex flex-col hover:bg-gray-200 cursor-pointer' onClick={props.onclick}>
            <p className='font-spartan text-black text-left regular-16'>{props.email}</p>
            <p className='font-spartan text-black regular-24'>{props.title}</p>
            <p className={style}>Location: <span className='text-black'> {props.location} aimag</span></p>
            <p className={style}>Salary: <span className='text-black'> {props.salary} tugrik</span></p>
        </div>
    )
}

export default PostPrefix