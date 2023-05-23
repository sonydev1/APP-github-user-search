import React from 'react'
import { BsSunFill } from 'react-icons/bs'

function Header() {
  return (
    <header className="text-white   flex items-center justify-between   px-1 mb-8">
    <h1 className="text-3xl font-mono">devfinder</h1>
    <button className="flex items-center gap-2">
      <span className="uppercase">light</span>
      <BsSunFill className="text-2xl"/>
    </button>
  </header>
  )
}

export default Header