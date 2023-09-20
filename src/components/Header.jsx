import React from 'react'
import { AiFillYoutube, AiOutlineMenu, AiOutlineVideoCameraAdd  } from 'react-icons/ai'
import { IoMdNotificationsOutline  } from 'react-icons/io'
import { VscAccount  } from 'react-icons/vsc'
import { BsMic } from 'react-icons/bs'

const Header = () => {
  return (
    <>
        <div className='flex justify-between items-center px-10 py-2 bg-black'>
            <div className='flex-none mr-10'>
            <div className='flex justify-between items-center gap-4 '>
               <div><AiOutlineMenu size={20} color='white'/></div>
               <div><AiFillYoutube color='red' size={28}/></div>
            </div>
            </div>
            
            <div className='grow'>
            <div className='flex justify-center items-center gap-4'>
               <div>
                   <form action="">
                        <input type="search" placeholder='Search' className='border border-gray-800 px-2 py-1 rounded-xl' />
                   </form>
               </div>
               <div><BsMic size={24} color='white'/></div>
            </div>
            </div>
            
            <div>
            <div className='flex justify-between items-center gap-4 ml-8'>
                <div><AiOutlineVideoCameraAdd size={24} color='white'/></div>
                <div><IoMdNotificationsOutline size={24} color='white'/></div>
                <div><VscAccount size={24} color='white'/></div>
            </div>
            </div>
          
        </div>
    </>
  )
}

export default Header