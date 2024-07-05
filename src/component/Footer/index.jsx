import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#1F2732] h-[50px] w-[100%] flex items-center  justify-between  px-[20px]'>
        <h1 className='text-slate-50'> @ UpskillMafia. All rights reserved</h1>
        <button className=' border-2 border-red-400 bg-orange-400 text-black font-medium text-lg rounded-lg h-[42px] w-[110px]'><Link to="/signup">Register</Link></button>
        </div>
  )
}

export default Footer