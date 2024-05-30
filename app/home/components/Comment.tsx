import React from 'react'


interface PostProps {
    user: string;
    comment: string;
  }

const Comment = (props: PostProps) => {
  return (
    <div className='bg-gray-300 rounded-xl px-4 py-2'>
        <p className='font-spartan bold-18 text-black '>{props.user}</p>
        <p className='font-spartan regular-16 text-black'>{props.comment}</p>
    </div>
  )
}

export default Comment