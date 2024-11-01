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
        <main className="p-6 mt-10 ml-28">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
