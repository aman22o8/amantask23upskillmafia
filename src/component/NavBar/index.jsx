import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-slate-200 w-[100%] h-[90px] flex items-center justify-between px-[15px]'>
      <Link to="/dashboard">
        <img src="./upskillmafia.png" alt="Upskillmafia" className='h-[60px] w-[60px]' />
      
      </Link>
        <button className=' border-2 border-red-400 bg-orange-400 text-black font-medium text-lg rounded-lg h-[42px] w-[110px]'>
          <Link to="/">Home</Link>
          </button>

        <div className='flex items-center justify-between  w-[200px]'>
            <button className='mx-[10px] border-2 border-fuchsia-200 bg-green-400 text-black font-medium text-lg rounded-lg h-[42px] w-[110px]'> <Link to="/login">Login</Link></button>
            <button className='mx-[10px] border-2 border-fuchsia-200 bg-green-400 text-black font-medium text-lg rounded-lg h-[42px] w-[110px]'> <Link to="/signup">SignUp</Link></button>
        </div>
        
    </div>
  )
}

export default NavBar