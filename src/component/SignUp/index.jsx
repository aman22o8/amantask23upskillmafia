import React from 'react'

const SignUp = () => {
  return (
    <div className='h-[78vh] flex justify-center items-center'>
    <form className='rounded-xl p-[15px] shadow-lg w-[370px] bg-slate-100 flex flex-col justify-center items-center'>
      <h1 className=' text-2xl font-bold'>SignUp</h1>


      <label className='mt-[15px] mb-[3px] ml-[35px] self-start text-sm font-semibold' htmlFor="username">User Name</label>
      <input className='rounded-md border-2 border-zinc-400 pl-[10px] h-[40px] w-[80%]' type="text" name="username" id="username" placeholder='eg: Aman' />

      <label className='mt-[15px] mb-[3px] ml-[35px] self-start text-sm font-semibold' htmlFor="email">Email</label>
      <input className='rounded-md border-2 border-zinc-400 pl-[10px] h-[40px] w-[80%]' type="email" name="email" id="email" placeholder='eg: efg@jkl.com' />

      <label className='mt-[15px] mb-[3px] ml-[35px] self-start text-sm font-semibold' htmlFor="password">Password</label>
      <input className='rounded-md border-2 border-zinc-400 pl-[10px] h-[40px] w-[80%]' type="password" name="password" placeholder='password' id="password" />
      <button className='mt-[30px] w-[80%] text-center h-[35px] bg-green-600 text-white text-lg rounded-md' type="submit">SIGNUP</button>
    </form>
  </div>
  )
}

export default SignUp