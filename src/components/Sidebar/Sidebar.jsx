import React from "react";
import { NavLink } from "react-router-dom";

const sidebarItems = [
  { to: "/", label: "Dashboard", icon: "./Lab_05/Squares four 1.png" },
  { to: "/projects", label: "Projects", icon: "./Lab_05/Folder.png" },
  { to: "/teams", label: "Teams", icon: "./Lab_05/Groups.png" },
  { to: "/analytics", label: "Analytics", icon: "./Lab_05/Pie chart.png" },
  { to: "/messages", label: "Messages", icon: "./Lab_05/Chat.png" },
  { to: "/integration", label: "Integration", icon: "./Lab_05/Code.png" },
];

function Sidebar() {
  return (
    <div className="flex flex-col w-full p-3 items-center justify-center bg-gray-50 space-y-5">
      <div>
        <img src="./Lab_05/Image 1858.png" alt="Logo" />
      </div>

      <div className="flex flex-col p-2 w-full space-y-2">
        {sidebarItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-row gap-2 p-2 rounded-xl items-center ${
                isActive
                  ? "bg-pink-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <img src={item.icon} alt={item.label} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>

      <div className="bg-blue-50 p-5 flex flex-col items-center justify-center space-y-3 rounded-xl w-full">
        <img src="./Lab_05/Group.png" className="w-[70%]" alt="Update" />
        <span className="text-xl text-black font-bold">V2.0 is available</span>
        <button className="w-full border border-blue-300 bg-white text-blue-500 p-1 rounded-xl hover:bg-blue-100 transition">
          Try now
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
