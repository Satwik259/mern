import React from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
//import picture1 from "../assets/picture1.svg"
import { GoArrowLeft } from "react-icons/go";
// import img from "../assets/iPhone14Pro2.png"
const Carddiv1 = ({ data }) => {
  //  console.log(data)

  return (
    <div className="pl-2 flex p-18 gap-[10px] w-full  lg:w-full no-scrollbar mt-12 overflow-scroll overflow-y-hidden  h-[312px]">
      {data?.slice(8,13).map((single) => (
        <div
          className={`"flex-col p-4  rounded-xl w-full  lg:w-screen  bg-no-repeat bg-cover object-contain   border-2 bg-white "`}
          style={{ backgroundImage: `url(${single.urlToImage})`}}
               >
          <section className="flex justify-between">
            <div className="flex gap-2 ">
              <div className="text-white text-2xl">
                <GoArrowLeft />
              </div>
              <div className="w-[78px] h-[29px] rounded-[30px] bg-white">
                <h1 className="text-center">Sports</h1>
              </div>
            </div>
            <div className="text-2xl">
              <BsFillBookmarkFill />
            </div>
          </section>
          <div className="w-[60vw] rounded-lg mt-[100px] line-clamp-3 flex-col  h-[100vh] ">
            <h1 className="text-xl font-[600px] text-white ">{single.title?.slice(0, 40)} </h1>
            <p className="text-md  font-normal text-white">{single.content?.slice(0,55)}</p>
          </div>
        </div>
      ))}
    </div>
  );

  //   )

  //   data?.slice(0,4).map((single)=>

  //  <section className="mt-[26.25px] w-screen">
  //    <main className="flex  ml-[23px] w-full no-scrollbar overflow-auto">
  //      <div className="flex-[0_0_250px] ">
  //        <img
  //          src={}
  //          className="h-[311px] w-[232px]"
  //          alt="cardarray"
  //        />
  //      </div>

  //      {/* <div className="flex-[0_0_250px] ">
  //       <img
  //         src={picture1}
  //         className="h-[311px] w-[232px]"
  //         alt="cardarray"
  //       />
  //     </div>
  //     <div className="flex-[0_0_250px]">
  //       <img
  //         src={picture1}
  //         className="h-[311px] w-[232px] "
  //         alt="cardarray"
  //       />
  //     </div>
  //     <div className="flex-[0_0_250px] ">
  //       <img
  //         src={picture1}
  //         className="h-[311px] w-[232px]"
  //         alt="cardarray"
  //       />
  //     </div>
  //     <div className="flex-[0_0_250px]">
  //       <img
  //         src={picture1}
  //         className="h-[311px] w-[232px] "
  //         alt="cardarray"
  //       />
  //     </div>
  //     <div className="flex-[0_0_250px]">
  //       <img
  //         src={picture1}
  //         className="h-[311px] w-[232px] "
  //         alt="cardarray"
  //       />
  //       </div> */}
  //     {/* </div>
  //     <div className='absolute text-white'>
  //     <p>10 hours ago</p>
  //     <h1>Lyft Revenue Grew Last Quarter Though Rider Numbers Were Below Expectations</h1>
  //     <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
  //     <p>Preetika Rana . The Wall Street Journal</p>
  //  </div> */}
  //    </main>
  //  </section>
};

export default Carddiv1;
