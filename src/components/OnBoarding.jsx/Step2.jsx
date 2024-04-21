import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, User, Users } from "lucide-react";
import ToggleSwitcher from "../ToggleSwitcher";
function Step2() {
  const [color, setColor] = useState();
  const handleClick = () => {
    setColor(!color);
  };
  return (
    <div className="flex justify-between h-screen text-slate-500">
      {/* left side */}
      <div className="w-full px-5 pt-5 h-fit  ">
        {/* nav */}
        <div className="flex  justify-between items-center">
          <Link to="/main">
            <img
              src="https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-blue-circle-watercolor-png-image_11601564.png"
              className="profile "
            />
          </Link>
          <Link to="/signin">
            <h1 className="font-medium">
              Have an account?
              <span className="text-indigo-500 hover:text-indigo-600 ">
                Sign In
              </span>
            </h1>
          </Link>
        </div>
        {/* body */}
        <div className="  h-full   flex flex-col items-center gap-y-3 px-14 pt-14">
          <div className="flex items-center py-2 w-full ">
            <h1 className="px-2 rounded-full bg-indigo-500 text-white font-mono">
              1
            </h1>
            <div className="border w-full  border-slate-300" />
            <h1 className="px-2 rounded-full bg-indigo-500 text-white font-mono">
              2
            </h1>
            <div className="border w-full border-slate-300" />
            <h1 className="px-2 rounded-full bg-slate-100 text-slate-500 font-mono">
              3
            </h1>
            <div className="border w-full border-slate-300" />
            <h1 className="px-2 rounded-full bg-slate-100 text-slate-500 font-mono">
              4
            </h1>
          </div>
          <h1 className="text-3xl font-bold pt-7 pb-4 text-nowrap text-black">
            Tell us about your company ✨
          </h1>
          <div
            className={`${
              color ? "border-indigo-600" : "border-slate-300"
            } border cursor-pointer rounded-md p-6 flex flex-col  items-center justify-center w-full`}
            onClick={handleClick}
          >
            <User className="fill-indigo-600 text-indigo-600 mb-2  h-10 w-10 rounded-full p-1 bg-indigo-100" />
            <h1 className="text-black font-medium">Individual</h1>
            <p className="">Lorem ipsum is place text commonly used.</p>
          </div>
          <div
            className={`${
              color ? "border-indigo-600" : "border-slate-300"
            } border cursor-pointer rounded-md p-6 flex flex-col  items-center justify-center w-full`}
            onClick={handleClick}
          >
            <Users className="fill-indigo-600 text-indigo-600 mb-2  h-10 w-10 rounded-full p-1 bg-indigo-100" />
            <h1 className="text-black font-medium">Organization</h1>
            <p className="">Lorem ipsum is place text commonly used.</p>
          </div>
          <div className="my-2 flex w-full justify-between gap-x-6 md:gap-x-9 items-center">
            <div>
              <h1 className="text-sm font-medium text-black">
                💸 Lorem ipsum is place text commonly?
              </h1>
              <p className="text-xs">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts.
              </p>
            </div>
            <ToggleSwitcher />
          </div>
          <div className="flex justify-between items-center w-full">
            <h1 className="iconflex underline cursor-pointer hover:no-underline">
              <ArrowLeft className="h-4 w-4" />
              Back
            </h1>
            <Link to="/step3">
              <button className="bg-indigo-500 hover:bg-indigo-600 px-2 py-[6px] rounded-md text-white iconflex font-medium">
                Next Step <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="h-full overflow-hidden hidden md:inline w-full">
        <img
          src="https://static.vecteezy.com/system/resources/previews/029/772/534/non_2x/portrait-of-cheerful-black-male-student-learning-online-in-coffee-shop-young-african-american-man-studies-with-laptop-in-cafe-doing-homework-free-photo.jpeg"
          className="w-full object-cover h-full"
        />
      </div>
    </div>
  );
}

export default Step2;
