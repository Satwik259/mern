import React, { useState } from 'react'
import Icon from "./Icon";
import Nav from "./Nav";
import Info from "./Info";
import Carddiv2 from "./Carddiv2";
import Carddiv1 from "./Carddiv1";
import {MdTravelExplore} from "react-icons/md"
import { usersStore } from './DisplayComponent';
import DisplayComponent    from "./DisplayComponent"
// import { useNavigate } from 'react-router-dom';
const Main = ({data}) => {
  
// const handleClick=usersStore(state=>state.setIsOpen)
// const open=usersStore(state=>state.isOpen)
   const [isOpen,setIsOpen]=useState(true)
    const handleClick =()=>{
       setIsOpen(false)
    }
    
  






  return (
    <div>
        { isOpen ?
    <main>
    <div className="w-screen flex-col  z-0 ">
      <Icon/>
      <Nav/>
      <Carddiv1 data={data}/> 
      <Info/>
      <Carddiv2 data={data}/>
       <div className="flex fixed left-[36%] bottom-[5%] lg:left-[46%]  z-10">
     <button onClick={()=>handleClick()}   className="text-2xl p-[6px_17px_6px_17px] text-white  bg-[#E56584] rounded-full  ">
      <div className="flex">
      <MdTravelExplore className="mt-1"/><h1 className="text-center font-medium">Explore</h1>
       </div>
       </button>
     </div>  
    </div>
    </main>
     :  <DisplayComponent open={setIsOpen} data={data}/>}
    </div>
    
  )

  }
export default Main