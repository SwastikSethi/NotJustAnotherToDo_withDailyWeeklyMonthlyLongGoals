import React from 'react'
import { BrowserRouter, Link, Router } from 'react-router-dom'

const NavBar = () => {
  return (
      <nav className='flex justify-around bg-slate-900 text-white py-2 rounded-xl m-5'>
        <div className="logo">
          <span className="font-bold text-xl mx8">To Do</span>
        </div>
          <BrowserRouter>
        <ul className="flex gap-16 justify-between">
          <Link  to="/" > <li className='hover:scale-110 transition-all duration-200 cursor-pointer'>Day</li></Link>
          <Link  to="/week" > <li className='hover:scale-110 transition-all duration-200 cursor-pointer'>Week</li></Link>
          <Link  to="/month" > <li className='hover:scale-110 transition-all duration-200 cursor-pointer'>Month</li></Link>
          <Link  to="/long" > <li className='hover:scale-110 transition-all duration-200 cursor-pointer'>Long Term</li></Link>
        </ul>
    </BrowserRouter>
      </nav>
  )
}

export default NavBar