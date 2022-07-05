import React, { useState } from 'react'
import logo from "../assest/logo.webp";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false)
  return (
    <nav className="py-4 sticky top-0 bg-slate-100 shadow-md z-20">
        <div className="container">
          <div className="md:flex justify-between items-center">
            <a href="#" className="flex justify-between">
              <img src={logo} />
            <button className='md:hidden' onClick={() => setOpenNavbar(!openNavbar)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            </a>
            <ul className={`${openNavbar ? "block" : "hidden"} md:flex justify-between md:space-x-8 transition-all`}>
              <li>
                <a href="#" className="text-slate-900 hover:text-slate-700 block mt-4 md:mt-0">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-900 hover:text-slate-700 block mt-4 md:mt-0">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-900 hover:text-slate-700 block mt-4 md:mt-0">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-900 hover:text-slate-700 block mt-4 md:mt-0">
                  Pages
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-900 hover:text-slate-700 block mt-4 md:mt-0">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-900 hover:text-slate-700 block mt-4 md:mt-0">
                  Contact
                </a>
              </li>
            </ul>
            <div className="hidden md:flex">
              <a className="px-10 py-2 rounded-md cursor-pointer bg-main text-white ">
                Free Trail
              </a>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar