import React from 'react'

interface PostProps {
    email: string;
    title: string;
    location: string; 
    salary: string; 
    onclick: () => void;
    ondelete: () => void;
    isUser: boolean; 
  }

const PostPrefix = (props: PostProps) => {
    const style = "pt- font-spartan text-background-10 text-left regular-16"

    return (
        <div className='border-2 border-gray-600 p-3 rounded-lg hover:bg-gray-200 cursor-pointer flex flex-row' onClick={props.onclick}>
            <div className='flex flex-col w-full'>
                <p className='font-spartan text-black text-left regular-16'>{props.email}</p>
                <p className='font-spartan text-black regular-24'>{props.title}</p>
                <p className={style}>Location: <span className='text-black'> {props.location} aimag</span></p>
                <p className={style}>Salary: <span className='text-black'> {props.salary} tugrik</span></p>
            </div>
            
            {props.isUser && 
            <div className='flex items-center'>
                <button className='h-fit bg-transparent text-background-10 hover:bg-gray-500 hover:text-white border-gray-200 px-4 py-1 border-2 rounded-md regular-18 font-spartan' onClick={props.ondelete}>Delete</button>
            </div>}
        </div>
    )
}

export default PostPrefix