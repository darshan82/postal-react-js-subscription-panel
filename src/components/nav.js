import React, {useEffect, useState, useContext} from 'react'
import {GoChevronDown, GoChevronUp, GoGrabber, GoPlay, GoX} from 'react-icons/go'
import { useNavigate } from "react-router-dom";
import { WindowSizeContext } from '../App';

const GET_STARTED = ['Delivery', 'Pickup', 'Restaurant']
const SERVICES = ['Marketing', 'Technology']
const Nav = (props) => {
  const {page='home'} = props
  const navigate = useNavigate()
  const windowSize = useContext(WindowSizeContext)

  const [getStartedOpen, setGetStartedOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    if(windowSize?.innerWidth > 767){
      setNavOpen(false)
    }
  }, [windowSize])


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

  const toggleNav = () => setNavOpen(!navOpen)

  if(navOpen){
    document.body.style.overflow = 'hidden'
  }else{
    document.body.style.overflow = 'auto'
  }

  return (
    <nav className={`w-full z-50 px-2 md:px-8 lg:px-48 flex flex-col gap-4 md:flex-row items-center justify-start py-2 fixed top-0 left-0 ${navOpen && 'h-full px-0'} ${props?.scrollY > 15 ? 'bg-white' : navOpen ? 'bg-white': page === 'home' ? 'bg-transparent' : 'bg-white'} transition-bg duration-500`}>
        <div className={`flex justify-between w-full md:w-[20%] ${navOpen && 'px-2'}`}>
          <div className='flex gap-2 items-center'>
            <h1 className={`text-2xl font-bold ${props?.scrollY > 15 ? 'text-yellow-400' : navOpen ? 'text-black': page === 'home' ?'text-white':'text-black'}`}>24/7 Postal</h1>
            <span className='text-2xl'><GoPlay /></span>
          </div>
          <div className={`md:hidden text-4xl ${navOpen ? 'text-red-400' : 'text-yellow-300'} transition duration-500 ease-in`} onClick={toggleNav}>{navOpen ? <GoX /> : <GoGrabber />}</div>
        </div>
        <ul className={`${navOpen ? 'w-full text-center' : 'hidden'} transition duration-500 ease md:w-[75%] md:flex md:justify-end md:items-center md:gap-x-4`}>
            <li>
              <button name='getStarted'
                onClick={handleDropdown}
                className={`md:bg-transparent w-full bg-yellow-400 py-4 flex font-medium items-end justify-center gap-1 ${props?.scrollY > 15 ? 'text-gray-900 text-lg': navOpen ? 'text-white text-xl' : page === 'home' ? 'text-white text-lg' : 'text-gray-900 text-lg'} hover:text-yellow-300 ${getStartedOpen ? navOpen ? 'text-white' : 'text-yellow-400':'text-white'} cursor-pointer`}>
              Get Started {getStartedOpen ? <GoChevronUp style={{color: 'yellow', }} /> : <GoChevronDown style={{color: 'yellow', }} /> }
              </button>
              <ul className={`${getStartedOpen ? 'visible' : 'hidden'} md:absolute md:top-[65px] bg-gray-100 md:rounded transition-visible ease-in duration-300`}>
                {GET_STARTED?.map((val, index) => {
                  return <li key={index} className='border-b-[1px] px-6 py-4 cursor-pointer hover:bg-white hover:text-yellow-500 rounded' onClick={() => {
                    if(val.toLowerCase() === 'restaurant'){
                      navigate('/')
                    }else{
                      navigate(`/${val.toLowerCase()}`)
                    }
                  }}><button>{val}</button></li>
                })}
              </ul>
            </li>
            <li>
              <button  
                name='services'
                onClick={handleDropdown}
                className={`md:bg-transparent w-full bg-[#450163] py-4 flex font-medium items-end justify-center gap-1  ${props?.scrollY > 15 ? 'text-gray-900 text-lg': navOpen ? 'text-white text-xl' : page === 'home' ? 'text-white text-lg' : 'text-gray-900 text-lg'} text-lg hover:text-yellow-300 ${servicesOpen ? navOpen ? 'text-white' : 'text-yellow-400':'text-white'} cursor-pointer`}>
                Services {servicesOpen ? <GoChevronUp style={{color: 'yellow', }} /> : <GoChevronDown style={{color: 'yellow', }} /> }
              </button>
              <ul className={`${servicesOpen ? 'visible' : 'hidden'} md:absolute md:top-[65px] bg-gray-100 md:rounded`}>
                {SERVICES?.map((val, index) => {
                  return <li key={index} className='border-b-[1px] px-6 py-4 cursor-pointer hover:bg-white hover:text-yellow-500 rounded' onClick={() => navigate(`/${val.toLowerCase()}`)}><button>{val}</button></li>
                })}
              </ul>
            </li>
            <li className={`md:rounded ${navOpen ? 'bg-[#8d0062] py-3 text-xl text-white' :'bg-white py-2 border-solid border-gray border-2 text-lg' }  px-5 font-semibold cursor-pointer`}>Log in</li>
            <li className={`bg-yellow-300 md:rounded px-5 ${navOpen ? 'py-3 text-xl text-white' : 'py-2 border-yellow-300 border-solid border-2 text-lg'} font-semibold cursor-pointer`}>Become a partner</li>
        </ul>
    </nav>
  )
}

export default Nav