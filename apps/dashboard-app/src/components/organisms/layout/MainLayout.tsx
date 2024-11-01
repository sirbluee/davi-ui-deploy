import React from "react";
import Header from "@/src/components/organisms/Header";
import Sidebar from "@/src/components/organisms/Sidebar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-[7%]">
        <Header />
        <div className="flex-1 overflow-auto pt-16 px-4 bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
