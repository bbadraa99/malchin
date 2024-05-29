import React from 'react'

interface PostProps {
    title: string;
    // description: string; 
    location: string; 
    salary: string; 
    // contact: string; 
  }

const Post = (props: PostProps) => {
    const style = "pt-3 font-spartan text-background-10 text-left regular-24"

    return (
        <div className='p-6'>
            <p className='font-spartan text-black text-left regular-24'>Username</p>
            <p className='font-spartan text-black bold-40'>{props.title}</p>
            <p className='font-spartan text-black regular-24 py-10'>Description </p>
            <p className={style}>Location: <span className='text-black'> {props.location} </span></p>
            <p className={style}>Salary: <span className='text-black'> {props.salary} tugrik</span></p>
        </div>
    )
}

export default Post