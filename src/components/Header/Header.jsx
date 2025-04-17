import React from 'react'

function Header() {
  return (
    <div className='flex flex-row w-full items-center justify-between p-5 border-1 border-gray-200 bg-gray-50'>
        <div>
            <h1 className='text-2xl font-bold text-pink-400'>Dashboard</h1>
        </div>
        <div className='flex flex-row justify-end items-center gap-5'>
            <div className='flex flex-row justify-between items-center bg-gray-200 rounded-[5px] p-1'>
                <img src="./Lab_05/Search.png" alt="" />
                <input type="text" name="" id="" placeholder='Search...' />
            </div>
            <img src="./Lab_05/Bell 1.png" alt="" />
            <img src="./Lab_05/Question 1.png" alt="" />
            <img src="./Lab_05/Avatar.png" alt="" />
            

        </div>
    </div>
  )
}

export default Header
