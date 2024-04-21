import React from "react";
import SidebarItem from "./SidebarItem";
import { Menus } from "./SidebarData";
function Sidebar() {
  return (
    <div className="h-full z-10 bg-slate-800 text-slate-100   overflow-y-auto no-scrollbar overflow-x-hidden  w-64 p-4 left-0 sticky">
      <img
        src="https://png.pngtree.com/png-clipart/20201029/ourmid/pngtree-circle-clipart-blue-circle-png-image_2381949.jpg"
        className="h-10 w-10 rounded-full"
      />

      <h1 className="text-slate-500  pt-8 flex flex-col gap-y-3 uppercase font-bold py-2 text-xs">
        Menus
      </h1>
      {Menus.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
}

export default Sidebar;
