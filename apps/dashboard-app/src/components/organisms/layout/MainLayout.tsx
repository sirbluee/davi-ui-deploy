import React from "react";
import Header from "@/src/components/organisms/Header";
import Sidebar from "@/src/components/organisms/Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="mt-16 ml-32">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
