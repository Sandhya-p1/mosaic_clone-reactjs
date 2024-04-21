import React from "react";

import { ArrowLeft, ArrowRight, ListFilter, Plus, Stars } from "lucide-react";
import Date from "../Date";

function Customers() {
  return (
    <div className="px-6 py-8  text-black">
      <div className="md:justify-between pb-6  md:flex space-y-3 ">
        <h1 className="font-semibold gap-x-1 text-black flex items-center text-3xl">
          Customers
          <Stars className="fill-yellow-500 h-7" />
        </h1>
        <div className="flex space-x-2">
          <Date />
          <ListFilter className="text-gray-600 p-1 shadow-md cursor-pointer h-10 w-10 border rounded-sm" />
          <button className="bg-indigo-500 px-2 flex items-center hover:bg-blue-700  text-white font-semibold rounded-md">
            <Plus className="text-gray-400 h-6" />
            Add Customer
          </button>
        </div>
      </div>
      <div className="box ">
        <h1 className="font-semibold p-3 ">
          All Customers <span className="text-gray-400"> 248</span>
        </h1>
      </div>
      {/* ---------footer part---------- */}
      <div className=" md:flex md:justify-between">
        <p className="p-3 text-gray-400 gap-x-1.5 justify-center hidden md:flex">
          Showing <span className="text-black"> 1</span> to
          <span className="text-black">10</span> of
          <span className="text-black"> 467</span> results
        </p>
        <div className="flex gap-x-2 pt-4 items-center justify-center cursor-pointer">
          <button className="text-gray-300 flex bg-white px-4 py-2 items-center border rounded-md">
            <ArrowLeft className="h-3 w-3" />
            Previous
          </button>
          <button className="text-blue-600 flex items-center rounded-md  hover:border-gray-300 bg-white gap-x-1 px-4 py-2 border">
            Next
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
      <p className="p-3 text-gray-400 md:hidden flex gap-x-1.5 justify-center">
        Showing <span className="text-black"> 1</span> to
        <span className="text-black">10</span> of
        <span className="text-black"> 467</span> results
      </p>
    </div>
  );
}

export default Customers;
