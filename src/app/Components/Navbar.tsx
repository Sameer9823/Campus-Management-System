'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LogoutButton from './Logout';


const Navbar = () => {
  return (
    <nav className="bg-blue-200 text-gray-800 w-full p-4 fixed z-10">
      <div className="container mx-auto flex justify-between items-center py-3">
        {/* Logo */}
        <Link href="/">
          <p className="text-gray-800 font-bold text-xl cursor-pointer">Campus Events</p>
        </Link>

        {/* Links for large screens */}
        <div className="hidden lg:flex space-x-4">
          <Link href="/">
            <p className="text-gray-600 hover:text-gray-400 cursor-pointer">Home</p>
          </Link>

          <>
            {/* Authenticated User Links */}
            <Link href="/Event">
              <p className="text-gray-600 hover:text-gray-400 cursor-pointer">Events</p>
            </Link>

            
           <LogoutButton/>
          </>

          <>
            {/* Guest Links */}
            <Link href="/Login">
              <p className="text-gray-600 hover:text-gray-400 cursor-pointer">SignIn</p>
            </Link>
            <Link href="/Signup">
              <p className="text-gray-600 hover:text-gray-400 cursor-pointer">SignUp</p>
            </Link>
          </>
        </div>

        {/* Drawer for mobile devices */}
        <div className="lg:hidden drawer-end">
          <label htmlFor="my-drawer-4" className="drawer-button text-gray-600 hover:text-gray-400 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Drawer content */}
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-200 text-base-content">
              <li>
                <Link href="/">
                  <p className="cursor-pointer">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/events/create">
                  <p className="cursor-pointer">Create Event</p>
                </Link>
              </li>
              <li>
                <Link href="/admin">
                  <p className="cursor-pointer">Admin Panel</p>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <p className="cursor-pointer">Login</p>
                </Link>
              </li>
              <li>
                <Link href="/auth/register">
                  <p className="cursor-pointer">Register</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
