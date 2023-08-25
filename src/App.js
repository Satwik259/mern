import { useEffect, useState } from "react";
import DisplayComponent from "./components/DisplayComponent";
import { Route, Router,Routes, useNavigate } from "react-router-dom";
import Main from "./components/Main";
// import ExploreButtonComponent from "./components/ExploreButtonComponent";
export default function App() {

     const [matter,setMatter]=useState()
    const getData=async ()=>{
      const data= await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=8d4c97f46b154f77ac04daa7f89a2f87")
      const response=await data.json()
        setMatter(response.articles)
    }
    useEffect(()=>{
      getData()
    },[])
 
    
  return (
    
     <Routes>
    <Route path="/" element={<Main data={matter}/>}/>
    {/* <Route path="/explore" element={<DisplayComponent data={matter}/>}/> */}
    </Routes>
   
  )}