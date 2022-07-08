import React from 'react'
import {GoChevronDown, GoGrabber, GoPlay} from 'react-icons/go'

const Nav = () => {
  return (
    <nav className='w-full px-2 md:px-8 lg:px-48 flex items-center justify-between py-2 fixed top-0 left-0 hover:bg-white transition-bg duration-500'>
        <div className='flex gap-2 items-center'>
          <h1 className='text-2xl opacity-100 transition-opacity duration-1000'>Brand</h1>
          <span className='text-2xl'><GoPlay /></span>
        </div>
        <span className='sm:hidden text-4xl'><GoGrabber /></span>
        <ul className='sm:flex hidden items-center gap-x-4'>
            <li className='flex font-medium items-end gap-1 hover:text-[#00CCBB] cursor-pointer'>Get Started {<GoChevronDown style={{color: '#00CCBB', }} />}</li>
            <li className='flex font-medium items-end gap-1 hover:text-[#00CCBB] cursor-pointer'>Services {<GoChevronDown style={{color: '#00CCBB', }} />}</li>
            <li className='rounded border-solid border-black border-2 px-5 py-2 text-lg text-yellow-300 cursor-pointer'>Login</li>
            <li className='bg-yellow-300 rounded px-5 py-2 border-yellow-300 border-solid border-2 text-lg text-white text-bold cursor-pointer'>Become a partner</li>
        </ul>
    </nav>
  )
}

export default Nav