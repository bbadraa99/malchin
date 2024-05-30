import { Timestamp } from 'firebase/firestore';
import React from 'react'


export interface CommentElements {
    email: string;
    message: string;
    timestamp?: Timestamp;
  }

const Comment = (props: CommentElements) => {
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
    <div className='bg-gray-300 rounded-xl px-4 py-2'>
        <p className='font-spartan bold-18 text-black '>{props.email}</p>
        <p className='font-spartan regular-18 text-black'>{props.message}</p>
        <p className='font-spartan regular-14 text-gray-700'>{props.timestamp ? getTimeAgo(props.timestamp) : ''}</p>
    </div>
  )
}

export default Comment