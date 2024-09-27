import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    
     <header className='bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 shadow-lg fixed top-0 left-0 w-full z-50'> 
     <div className='flex justify-between items-center max-w-6xl mx-auto  py-4 px-4' >
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap text-white'> 
        <span className= 'text-3xl'>P</span>
        <span className='flex items-center'>
            <span className='text-xl underline'>ALASA</span>
            <span className='text-xl underline'>ESTAT</span>
            </span>
            <span className='text-3xl'>E</span>
        </h1>
        </Link>
      
        <form className='bg-white p-2 rounded-full flex items-center shadow-sm'>
            <input type='text' placeholder='Search....' className='bg-transparent focus:outline-none w-24 sm:w-64  text-slate-800'/>
            <FaSearch className='text-purple-500'/>
        </form>
        <ul className='flex gap-4'>
        <Link to='/'>
        <li className='hidden sm:inline text-white hover:text-yellow-300 transition-all duration-300 ease-in-out'>Home</li>
      </Link>
      <Link to='/about'>
        <li className='hidden sm:inline text-white hover:text-yellow-300 transition-all duration-300 ease-in-out'>About</li>
      </Link>
      <Link to='/sign-in'>
        <li className='text-white hover:text-yellow-300 transition-all duration-300 ease-in-out'>Signin</li>
      </Link>
        </ul>
        </div>
     </header>

  )
}
