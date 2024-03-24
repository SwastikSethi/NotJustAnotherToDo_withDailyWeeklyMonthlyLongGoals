import React from 'react'
import { BrowserRouter, NavLink, Router } from 'react-router-dom'


const NavBar = () => {

  return (
    <BrowserRouter>
      <nav className='flex justify-around bg-slate-900 text-white py-2 rounded-xl m-5'>
        <div className="logo">
          <span className="font-bold text-xl mx8">To Do</span>
        </div>
        <ul className="flex gap-16 justify-between">
          <NavLink onClick={()=>{dispatch(change())}} className={(e) => { return e.isActive ? "bg-red-700 rounded-xl px-3 " : "" }} to="/" > <li className='hover:scale-110 transition-all duration-200 cursor-pointer'>Day</li></NavLink>
          <NavLink onClick={()=>{dispatch(change())}} className={(e) => { return e.isActive ? "bg-red-700 rounded-xl px-3 " : "" }} to="/week" > <li className='hover:scale-110 transition-all duration-200 cursor-pointer'>Week</li></NavLink>
          <NavLink onClick={()=>{dispatch(change())}} className={(e) => { return e.isActive ? "bg-red-700 rounded-xl px-3 " : "" }} to="/month" > <li className='hover:scale-110 transition-all duration-200 cursor-pointer'>Month</li></NavLink>
          <NavLink onClick={()=>{dispatch(change())}} className={(e) => { return e.isActive ? "bg-red-700 rounded-xl px-3 " : "" }} to="/long" > <li className='hover:scale-110 transition-all duration-200 cursor-pointer'>Long Term</li></NavLink>
        </ul>
      </nav>
    </BrowserRouter>
  )
}

export default NavBar