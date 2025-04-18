import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Overview from "../Overview/Overview";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-4 min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:col-span-1">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full md:col-span-3 flex flex-col">
        <Header />
        <Overview />
        <div className="mt-4 p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
