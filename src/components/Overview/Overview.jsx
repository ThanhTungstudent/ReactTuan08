import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

function Overview({ overviews }) {
  return (
    <div className="w-full p-5 space-y-5">
      <div className="flex flex-row gap-2">
        <img src="./Lab_05/Squares four 1.png" alt="" />
        <h1 className="text-2xl font-bold text-black">Overview</h1>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {overviews &&
          overviews.map((overview, index) => (
            <div
              key={index}
              className="flex w-full items-center justify-center"
            >
              <Card overview={overview} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Overview;
