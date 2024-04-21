import React, { useState } from "react";
import {
  Menu,
  Search,
  MessageCircleMoreIcon,
  AlertCircle,
  ChevronDown,
} from "lucide-react";
import AcmeList from "./AcmeList";

function Nav() {
  const [showList, setShowList] = useState(false);
  const handleClick = () => {
    setShowList(!showList);
  };

  return (
    <header className=" sticky top-0 z-50 flex items-center  w-full   justify-between text-gray-500 bg-white border border-slate-200 px-4 py-5">
      {/* .........here is the MENU BAR  and its list component.... */}
      <Menu className="icon cursor-pointer lg:hidden " />
      <div className="hidden lg:inline" />
      <div className="flex space-x-3 items-center">
        {/* <ThemeSwitcher /> */}
        <Search className="navlist" />
        <MessageCircleMoreIcon className="navlist" />
        <AlertCircle className="navlist" />
        <div className="h-7 border" />
        <img
          src="https://toppng.com/uploads/preview/blue-right-arrow-icon-blue-arrow-png-ico-11562953197kqrddqm8rv.png"
          className="h-8"
        />
        <p
          className="text-black flex items-center cursor-pointer transition duration-500 ease-in-out "
          onClick={handleClick}
        >
          Acme Inc.
          <ChevronDown className=" text-gray-400 h-7 pt-2" />
        </p>
        {showList && <AcmeList />}
      </div>
    </header>
  );
}

export default Nav;
