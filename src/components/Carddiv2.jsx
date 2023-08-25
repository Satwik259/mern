import React from "react";
//import pubg from "../assets/Pubg.svg";
const Carddiv2 = ({data}) => {
    
    //   const cardsComponents=data?.slice(0,3).map((single)=>(
    
    // <div className="flex p-4  justify-between rounded-md border-2  border-black bg-white text-sm text-gray-500 h-[30vh] w-[90vw]">
    //   <div className=" line-clamp-3  h-auto ">
    //   <p> 1 day ago  </p>
    //   <h2 className="text-lg  font-semibold text-black">{single.content.slice(0,30)}</h2>
    //   <p className="">{single.description.slice(0,20)}</p>
    //   <p>Matt Young . Daily Beast</p>
    //   </div>
    //   <img src={pubg} width={150} height={100}  className=""/>
    // </div>
    //   ))

//  console.log(data)
  // console.log(data.articles)

  return (
        
    <div className="pl-4 p-18 flex-col flex  lg:w-full  gap-2">    
      { data?.slice(15,20)?.map((single)=>(
          <div className="flex p-2  justify-between   lg:w-screen   border-2 shadow-gray-950  ml-1  rounded-md  bg-white text-sm text-gray-500 h-[30vh] w-[90vw] ">
            <div className=" line-clamp-3  h-auto ">
            <p> 1 day ago  </p>
            <h2 className="text-lg  font-medium text-black">{single.content?.slice(0,28)}</h2>
            <p className="mt-2 font-sans font-normal">{single.description?.slice(0,28)}</p>
            <p className="mt-10">{single.author}</p>
            </div>
            <div  style={{ backgroundImage: `url(${single.urlToImage})`}} className="h-[128px] w-[127px] bg-cover bg-no-repeat  rounded-lg ml-2 mt-6 ">
            {/* <img  width={150} height={100}  className="" alt="newimg"/> */}
            </div>
          </div>
            ))
      }
  </div>
      
  );
};

export default Carddiv2;
