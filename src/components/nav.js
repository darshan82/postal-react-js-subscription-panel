import React, {useState} from 'react'
import {GoChevronDown, GoChevronUp, GoGrabber, GoPlay} from 'react-icons/go'

const GET_STARTED = ['Delivery', 'Pickup', 'Restaurant']
const SERVICES = ['Marketing', 'Technology']
const Nav = (props) => {
  const [getStartedOpen, setGetStartedOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  console.log('getStartedOpen: ', getStartedOpen)

  const handleDropdown = e => {
    // alert(e.target.name)
    switch(e.target.name){
      case 'getStarted':
        setGetStartedOpen(!getStartedOpen)
        setServicesOpen(false)
        break
      case 'services':
        setServicesOpen(!servicesOpen)
        setGetStartedOpen(false)
        break
      default:
    }
  }
  return (
    <nav className={`w-full px-2 md:px-8 lg:px-48 flex items-center justify-between py-2 fixed top-0 left-0 ${props?.scrollY > 15 ? 'bg-white' : 'bg-transparent'} transition-bg duration-500`}>
        <div className='flex gap-2 items-center'>
          <h1 className={`text-2xl font-bold ${props?.scrollY > 15 ? 'text-[#00CCBB]' : 'text-white'}`}>Deliveroo</h1>
          <span className='text-2xl'><GoPlay /></span>
        </div>
        <span className='md:hidden text-4xl'><GoGrabber /></span>
        <ul className='md:flex hidden items-center gap-x-4'>
            <li>
              <button name='getStarted'
                onClick={handleDropdown}
                className={`bg-transparent flex font-medium items-end gap-1 ${props?.scrollY > 15 ? 'text-black' : 'text-white'} hover:text-yellow-300 ${getStartedOpen ? 'text-yellow-400':'text-white'} cursor-pointer`}>
              Get Started {getStartedOpen ? <GoChevronUp style={{color: 'yellow', }} /> : <GoChevronDown style={{color: 'yellow', }} /> }
              </button>
              <ul className={`${getStartedOpen ? 'visible' : 'hidden'} absolute top-[65px] bg-gray-100 rounded`}>
                {GET_STARTED?.map(val => {
                  return <li className='border-b-[1px] px-6 py-4 cursor-pointer hover:bg-white rounded'><button>{val}</button></li>
                })}
              </ul>
            </li>
            <li>
              <button  
                name='services'
                onClick={handleDropdown}
                className={`bg-transparent flex font-medium items-end gap-1 ${props?.scrollY > 15 ? 'text-black' : 'text-white'} hover:text-yellow-300 ${servicesOpen ? 'text-yellow-400':'text-white'} cursor-pointer`}>
                Services {servicesOpen ? <GoChevronUp style={{color: 'yellow', }} /> : <GoChevronDown style={{color: 'yellow', }} /> }
              </button>
              <ul className={`${servicesOpen ? 'visible' : 'hidden'} absolute top-[65px] bg-gray-100 rounded`}>
                {SERVICES?.map(val => {
                  return <li className='border-b-[1px] px-6 py-4 cursor-pointer hover:bg-white rounded'><button>{val}</button></li>
                })}
              </ul>
            </li>
            <li className={`rounded ${props?.scrollY > 15 ? null : 'bg-white'}  border-solid border-gray border-2 px-5 py-2 text-lg text-yellow-400 font-semibold cursor-pointer`}>Log in</li>
            <li className='bg-yellow-300 rounded px-5 py-2 border-yellow-300 border-solid border-2 text-lg text-black font-semibold text-bold cursor-pointer'>Become a partner</li>
        </ul>
    </nav>
  )
}

export default Nav