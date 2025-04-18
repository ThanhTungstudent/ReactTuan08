import React from 'react'

function Header() {
  return (
    <div className="flex flex-wrap w-full items-center justify-between p-4 md:p-5 border
     border-gray-200 bg-gray-50 gap-4">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-pink-400">Dashboard</h1>
      </div>
      <div className="flex flex-wrap justify-end items-center gap-4 md:gap-5">
        <div className="flex flex-row items-center bg-gray-200 rounded-md px-2 py-1 w-full 
        sm:w-auto">
          <img src="./Lab_05/Search.png" alt="Search icon" className="w-4 h-4 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-full sm:w-40"
          />
        </div>
        <img src="./Lab_05/Bell 1.png" alt="Notification" className="w-6 h-6" />
        <img src="./Lab_05/Question 1.png" alt="Help" className="w-6 h-6" />
        <img src="./Lab_05/Avatar.png" alt="User avatar" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
}

export default Header
