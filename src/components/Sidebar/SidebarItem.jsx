import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);
  const openSubMenus = () => {
    setOpen(!open);
  };
  return (
    <div className="p-2 rounded-sm my-1 flex flex-col w-full  hover:bg-slate-900 cursor-pointer">
      <div
        className="flex justify-between font-medium  text-lg items-center w-full"
        onClick={openSubMenus}
      >
        <NavLink
          to={item.path && item.path}
          className={({ isActive }) =>
            isActive && !item.subMenus ? "text-indigo-600" : ""
          }
        >
          {item.title}
        </NavLink>

        {item.subMenus && (
          <ChevronDown
            className={
              open
                ? "rotate-180 transition-transform ease-linear duration-200"
                : "rotate-0"
            }
          />
        )}
      </div>
      {/* for submenus */}
      <div
        className={
          item.subMenus && open
            ? "p-2   transition-all ease-in duration-0 flex flex-col gap-y-1 "
            : "h-0 overflow-hidden"
        }
      >
        {item.subMenus &&
          item.subMenus.map((child, index) => (
            <NavLink
              to={child.path}
              key={index}
              className={({ isActive }) =>
                isActive ? "text-indigo-600" : "text-slate-300"
              }
            >
              {child.title}
            </NavLink>
          ))}
      </div>
    </div>
  );
}

export default SidebarItem;
