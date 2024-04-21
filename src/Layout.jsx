import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Nav";
import Sidebar from "./components/Sidebar/Sidebar";
function Layout() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />

        <div className="w-full overflow-auto no-scrollbar">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
