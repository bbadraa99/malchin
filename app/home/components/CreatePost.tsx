import React from 'react'

const CreatePost = () => {

    const style = "pt-3 font-spartan text-background-10 text-left regular-16"
  return (
    <div className='fixed inset-0 h-fit sm:h-screen flex justify-center pt-32 z-51 bg-gray-200 bg-opacity-40'>
        <div className='flex flex-col w-1/2 shadow-xl rounded-xl bg-stone-100 h-fit p-6'>
            <h1 className='bold-36 font-spartan text-background-10 px-16 center'>Create a post</h1>
            <div className='flex flex-col sm:flex-row justify-left sm:flexBetween'>
                <div className='w-full sm:w-2/5'>
                    <p className={style}>Location</p>
                    <select className="select w-full max-w-xs font-spartan bg-white text-black regular-16">
                        <option disabled selected>Which aimag?</option>
                        <option>Arkhangai</option>
                        <option>Umnugovi</option>
                        <option>Sukhbaatar</option>
                        <option>Tuv</option>
                    </select>

                    <p className={style}>Title</p>
                    <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs bg-white font-spartan text-black regular-16" />
                </div>
                <div className='w-full sm:w-2/5 md:pr-6 lg:pr-16'>
                    <p className={style}>Salary (MNT)</p>
                    <input type="text" placeholder="Salary" className="input input-bordered w-full max-w-xs bg-white font-spartan text-black regular-16" />
                    <p className={style}>Contact</p>
                    <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs bg-white font-spartan text-black regular-16" />
                </div>
            </div>
            <p className={style}>Description</p>
            <textarea className="textarea font-spartan text-black bg-white regular-16 " placeholder="Description"></textarea>
            
        </div> 
    </div>
  )
}

export default CreatePost