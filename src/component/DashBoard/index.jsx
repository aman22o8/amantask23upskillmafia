import React from 'react'
import SideBarDashBoard from '../SideBarDashBoard'

const DashBoard = () => {
  const newDate= Date().toLocaleString()
  const myDate=(new Date(newDate)).toLocaleString()
  
  
  return (
    <div className='flex  w-[100%]'>
      <div className='m-[10px] order-1 pb-[10px] h-[70%] shadow-xl w-[62%]'>
        <img  className="w-[100%] h-[60%]" src="./dashboard1.jpeg" alt="dashboard1" />
        <h1 className=' ml-[10px] my-[10px] text-2xl font-bold'>THE HEADING</h1>
        <p className= 'ml-[10px] my-[8px] text-2xl font-bold'>Title description , <span className='text-slate-400 text-[12px] font-[600]'>{myDate}</span></p>
        <p className='text-base ml-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nobis ducimus non molestias tempore aperiam autem a ipsa harum corporis iusto, velit suscipit, distinctio fugit, consequatur debitis nisi repellat ullam.</p>
        <div className='ml-[10px] mt-[10px] flex items-center justify-between px-[8px]'>
          <button className='h-[42px] w-[140px] border-[1px] border-slate-400 rounded-sm text-base font-semibold'>{`READ MORE >>`}</button>
          <div className=' flex items-center '>
            <p className='text-base font-semibold mx-[5px]'>Comments</p>
            <button className='h-[30px] w-[30px] mx-[5px] text-center bg-black text-white font-bold '>0</button>
          </div>
        </div>

      </div>
      <div className='order-2 w-[38%]'>
              <SideBarDashBoard/>

      </div>
    </div>
  )
}

export default DashBoard