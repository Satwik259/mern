import React, { useState } from 'react'
//import picture1 from "../assets/picture1.svg"
//import { create } from 'zustand'
import {GoArrowLeft } from "react-icons/go"
import {BsFillBookmarkFill} from "react-icons/bs"
// export const usersStore = create((set) => ({
//   isOpen:false,
//   setIsOpen: () => set((state) => ({isOpen:true })),
//  // removeAllBears: () => set({ bears: 0 }),
// }))

const DisplayComponent = ({open,data}) => {

  // const open=usersStore.isOpen 
  
  //  const [isClose,setIsClose] = useState(true)
 console.log(data)
   function closeComponent(){
     open(true)
   }

  return (
    <div>
      {data?.slice(0,1).map((single) => (
        <div
          className={`"flex-col p-4   rounded-xl   lg:w-screen  bg-no-repeat bg-cover object-contain h-[100vh] w-[100vw]   m-0 border-2 "`}
          style={{ backgroundImage: `url(${single.urlToImage})`}}
               >
          <section className="flex justify-between">
            <div className="flex  gap-2 ">
              <div className="text-white text-2xl font-bold ">
              <div className='flex justify-center  '>
          <button  className='text-2xl   text-white' onClick={()=>closeComponent()}> <GoArrowLeft /></button>
          </div>
               
              </div>
              <div className="w-[78px] h-[29px] rounded-[30px] bg-white">
                <h1 className="text-center">Sports</h1>
              </div>
            </div>
            <div className='text-2xl'>
              <BsFillBookmarkFill />
            </div>
          </section>
          <div className="w-[60vw] rounded-lg mt-[70vh] line-clamp-3 flex-col  h-auto ">
            <h1 className="text-2xl font-[600px] text-white ">{single.title?.slice(0,55)} </h1>
            <p className="text-md  font-normal text-white">{single.content?.slice(0,45)}</p>
            {/* <p className="text-white ">{single.description?.slice(0, 30)}</p> */}
            <p  className="text-xl">{single.author}</p>
          </div>
         
        </div>
      ))}
    </div>      
  )
}

export default DisplayComponent