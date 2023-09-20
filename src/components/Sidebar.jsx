import React from 'react'
import {AiFillHome } from 'react-icons/ai';


const Sidebar = () => {
  return (
    <div className='w-[17%] bg-black h-screen text-gray-100 px-10 pt-5'>
        <div className='flex gap-2   pb-4'>
            <div><AiFillHome size={24}/></div>
            <div>Home</div>
        </div>
        <div className='flex gap-2 pb-4'>
            <div><AiFillHome size={24}/></div>
            <div>Shortcuts</div>
        </div>
        <div className='flex gap-2 pb-4'>
            <div><AiFillHome size={24}/></div>
            <div>Subscription</div>
        </div>
        <div className='flex gap-2 pb-4'>
            <div><AiFillHome size={24}/></div>
            <div>Home</div>
        </div>
        <div className='flex gap-2 pb-4'>
            <div><AiFillHome size={24}/></div>
            <div>Home</div>
        </div>
       
    </div>
  )
}

export default Sidebar