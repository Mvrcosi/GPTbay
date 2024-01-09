import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-evenly p-4 w-full bg-slate-800">
      <h1 className="tracking-wider text-xl font-black text-white">GPT<span className='tracking-tight text-slate-400'>bay</span></h1>
      <div className="flex flex-row items-center space-x-2 ">
        <a className="text-sm font-bold text-neutral-200	">GPTs</a>
        <a className="text-sm font-bold text-neutral-200	">Creators</a>
        <button className="text-sm text-white border hover:bg-gray-400 w-24 rounded">Submit GPT</button>
        <button className="text-sm text-white bg-gray-400 w-24 rounded">Sign In</button>
      </div>
    </nav>
)}

export default Navbar