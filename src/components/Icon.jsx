import React from "react";
import { BsBatteryFull } from "react-icons/bs";
import { IoIosWifi } from "react-icons/io";
import { PiCellSignalHighBold } from "react-icons/pi";
const Icon = () => {
  return (
    <div className="w-screen bg-white lg:hidden">
      <header className=" flex justify-between  ">
        <div className="w-10/12">
          <h1 className="pl-5  pt-[10px]">9:41</h1>
        </div>
        <div className="flex w-2/12  justify-evenly pr-5 pt-[10px]">
          <div>
            <PiCellSignalHighBold />
          </div>
          <div>
            <IoIosWifi />
          </div>
          <div className="pl-1">
            <BsBatteryFull />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Icon;
