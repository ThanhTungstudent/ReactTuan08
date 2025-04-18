import React from "react";

import { CiShoppingCart } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

function Card({ overview }) {
  const iconMap = {
    shopping_cart: <CiShoppingCart className="text-pink-600" size={24} />,
    dollar: <FaDollarSign className="text-blue-600" size={24} />,
    user: <FaRegUserCircle className="text-blue-600" size={24} />,
  };
  return (
    <div
      className="w-full max-w-sm h-auto p-4 md:p-5 rounded-md shadow-sm"
      style={{ backgroundColor: overview?.bgColor || "#f9fafb" }}
    >
      <div className="flex flex-row justify-between items-center">
        <p className="text-sm md:text-base font-medium text-gray-800">
          {overview?.title}
        </p>
        <button
          className={`p-2 border rounded-md ${
            overview?.icon === "shopping_cart"
              ? "border-pink-600"
              : "border-blue-600"
          }`}
        >
          {iconMap[overview?.icon]}
        </button>
      </div>

      <div className="mt-3">
        <p className="text-xl md:text-2xl text-black font-bold">
          {overview?.value}
        </p>
        <div className="mt-2 text-sm">
          {overview?.change_type === "increase" ? (
            <div className="text-green-600">
              <span>▲ {overview?.change}</span>
              <span className="text-gray-400"> {overview?.desciption}</span>
            </div>
          ) : (
            <div className="text-red-500">
              <span>▼ {overview?.change}</span>
              <span className="text-gray-400"> {overview?.desciption}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
