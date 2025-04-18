import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Overview from "../Overview/Overview";
import { Outlet } from "react-router-dom";

function MainLayout() {
  
  return (
    <div className="grid grid-cols-4 p-2">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-3">
        <Header />
        <Overview />
        <div className="mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
