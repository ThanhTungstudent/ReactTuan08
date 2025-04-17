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
      className={`w-[300px] h-[130px] p-5 rounded-[5px] 
    bg-${overview?.bgColor}`}
    >
      <div className="flex flex-row justify-between">
        <p>{overview?.title}</p>
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
      <div className="">
        <p className="text-2xl text-black font-bold">{overview?.value}</p>
        <div className="mt-2">
          {overview?.change_type === "increase" ? (
            <div>
              <span className="text-green-600">▲ </span>
              <span className="text-green-600">{overview?.change}</span>
              <span className="text-gray-400"> {overview?.desciption}</span>
            </div>
          ) : (
            <div>
              <span>▼ </span>
              <span>{overview?.change}</span>
              <span> {overview?.desciption}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
