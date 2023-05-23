import React from 'react'
import { BsSearch } from 'react-icons/bs'

function From() {
  return (
    <form className="bg-[#1f2a48]  p-2  rounded-xl  mb-6">
        <div className="flex items-center justify-around gap-2">
          <BsSearch className="fill-[#0079fe] text-3xl"/>
          <input type="text" placeholder="Search GitHub username..." className="w-full h-full py-2 px-4 bg-[#1f2a48] outline-none  text-white font-serif" />
          <button className="bg-[#0079fe] text-white px-4 py-2 rounded-lg">Search</button>
        </div>
      </form>
  )
}

export default From