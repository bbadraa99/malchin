import React, { useState } from 'react'
import Post from './Post'
import PostPrefix from './PostPrefix'

const Feed = () => {

    const [currentPost, setCurrentPost] = useState({ title: '', salary: '', location: '' });

    const handleClick = (title: string, salary: string, location: string) => {
        setCurrentPost({ title: title, salary: salary, location: location });
    };

  return (
    <div className='w-full p-10 pt-20 flex flex-row justify-between'>
        <div className='w-2/5 pr-10 space-y-6'>
            <PostPrefix onclick={() => handleClick("Needs support for herderman", '100000', "Sukhbaatar aimag")} title="Needs support for herderman" location="Sukhbaatar aimag" salary='100000'/>
            <PostPrefix onclick={() => handleClick("Needs support for herderman", '100000', "Sukhbaatar aimag")} title="Needs support for herderman" location="Sukhbaatar aimag" salary='100000'/>
            <PostPrefix onclick={() => handleClick("Needs support for herderman", '100000', "Sukhbaatar aimag")} title="Needs support for herderman" location="Sukhbaatar aimag" salary='100000'/>
            <PostPrefix onclick={() => handleClick("Needs support for herderman", '100000', "Sukhbaatar aimag")} title="Needs support for herderman" location="Sukhbaatar aimag" salary='100000'/>
        </div>
        <div className='w-3/5 border-2 rounded-lg border-black flex h-fit'>
            <Post title={currentPost.title} salary={currentPost.title} location={currentPost.location} />
        </div>
    </div>
  )
}

export default Feed