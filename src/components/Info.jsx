import React from 'react'

const Info = () => {
  return (
    <>
    <section className='w-screen bg-slate-50'>
    
     <h1 className='ml-2 mb-[12.5px] mt-5 text-black text-2xl font-semibold text-left'>Top Stories for you</h1>

     <div className=' flex w-full  mb-5  justify-evenly overflow-x-scroll '>
        <span className=' text-lg  rounded-full w-[51px] h-[40px] hover:text-white hover:bg-pink-500 p-2 bg-white border-2 border-white text-black  text-center pt-0.5'>All</span>
        <span className=' text-lg  rounded-full w-[86px] h-[40px] hover:text-white hover:bg-pink-500 p-2 bg-white border-2 border-white text-black text-center pt-0.5'>Android</span>
        <span className=' text-lg  rounded-full w-[79px] h-[40px] hover:text-white hover:bg-pink-500 p-2 bg-white border-2 border-white text-black text-center pt-0.5'>Cricket</span>
        <span className=' text-lg  rounded-full w-[80px] h-[40px] hover:text-white hover:bg-pink-500 p-2 bg-white border-2 border-white text-black text-center pt-0.5'>iPhone</span>
        <span className=' text-lg  rounded-full w-[80px] h-[40px] hover:text-white hover:bg-pink-500 p-2 bg-white border-2 border-white text-black text-center pt-0.5'>Google</span>
    </div> 
      
  



   









    </section>
    </>
  )
}

export default Info