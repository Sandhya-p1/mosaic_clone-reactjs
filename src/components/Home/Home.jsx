import React from "react";
import Footer from "./Footer";

import { Plus, ListFilter, PlusIcon } from "lucide-react";
import Date from "../Date";

function Main() {
  return (
    <div className="p-8  bg-gray-100 ">
      <div className="bg-indigo-200 p-7 rounded-sm ">
        <h1 className=" text-black text-3xl font-bold">
          Good afternoon, Acme Inc.
        </h1>
        <p className="text-gray-600 py-1 text-lg">
          Here is what's happening with your project today:
        </p>
      </div>
      <div className="md:flex md:justify-between py-8">
        {/* profile pictures of everyone left*/}
        <div className=" text-center flex justify-center -space-x-4 cursor-pointer">
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            className="profile"
          />
          <img
            src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
            className="profile "
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7nDH-ACqKxCE7-sVLFgpnwZpDFykPNufEOjxfzoI9nQ&s"
            className="profile"
          />
          <img
            src="https://www.shutterstock.com/image-photo/photo-portrait-lovely-young-lady-260nw-2269863981.jpg"
            className="profile"
          />
          <PlusIcon className="h-12 w-12 text-blue-700 border hover:border-blue-200 rounded-full text-center p-2 bg-white" />
        </div>

        <div className=" flex space-x-4 items-center py-5 md:py-0 text-gray-500 ">
          <ListFilter className="h-9 w-9 cursor-pointer p-1 bg-white border rounded-sm hover:border-gray-300 " />
          <Date />
          {/* <DateRangePicker
            oneTap
            showOneCalendar
            hoverRange="week"
            ranges={[]}
            className="bg-white"
          /> */}

          <button className="flex items-center  bg-indigo-500 hover:bg-indigo-700 rounded-sm px-3 py-2 ">
            <Plus className="h-5 text-indigo-400" />
            <p className="text-white ml-1 font-medium">Add View</p>
          </button>
        </div>
        {/* footer part */}
      </div>
      <Footer />
    </div>
  );
}

export default Main;
