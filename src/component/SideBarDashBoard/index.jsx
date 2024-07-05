import React from 'react'

const arrayListItem=[
    {id:1,title:"Loerm",description:"sit amet consectetur",image_id:"./listimage1.jpeg"},
    {id:2,title:"Aperiam",description:"molestias tempore aperiam",image_id:"./listimage2.jpeg"},
    {id:3,title:"Corporis",description:"nobis ducimus non",image_id:"./listimage3.jpeg"},
    {id:4,title:"Velit",description:"distinctio fugit",image_id:"./listimage4.jpeg"},
]
const TagItemList=[
    {id:1,title:"Travel"},
    {id:2,title:"New York"},
    {id:3,title:"London"},
    {id:4,title:"USA"},
    {id:5,title:"Norway"},
    {id:6,title:"Clothing"},
    {id:7,title:"Shopping"},
    {id:8,title:"Sports"},
    {id:9,title:"Games"},
    {id:0,title:"Family"},
]
const SideBarDashBoard = () => {
  return (
    <div className='w-[100%]  m-[10px]'>
        <div className='shadow-xl pb-[12px]'>
            <img src="sidedashboard1.jpeg" alt="sidedashboard1" className='w-[100%]' />
            <h1 className='ml-[10px] text-xl font-bold'>THE HEADING</h1>
       
        <p className='ml-[10px] text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nobis ducimus non molestias tempore aperiam autem a ipsa harum corporis iusto, velit suscipit, distinctio fugit</p>

        </div>
        <hr className='border-t-2 border border-slate-200 my-[15px]' />

        <ul className='pt-[10px] list-none my-[10px] shadow-xl'>{arrayListItem.map((each)=>{
            return (<li className= 'border-b-2 py-[15px]  my-[10px] flex items-center' key={each.id}>
                <img className='h-[45px] w-[90px]' src={each.image_id} alt={each.id} />
                <div className='ml-[15px]'>
                    <h1 className='font-medium text-[16px]'>{each.title}</h1>
                    <p className='text-[11px]'>{each.description}</p>
                </div>
                
            </li>)
        })
            }</ul>

            <hr className='border-t-2  border-slate-200 my-[15px]' />

            <ul className='py-[10px] flex flex-wrap list-none my-[10px] shadow-xl'>{TagItemList.map((each)=>{
                return <li className='m-[8px]'>
                    <button className='border-[0px] rounded-md bg-black text-white text-xs h-[40px] px-[15px] text-center' key={each.id}>{each.title}</button>

                </li>
                
            })}</ul>
        </div>
  )
}

export default SideBarDashBoard