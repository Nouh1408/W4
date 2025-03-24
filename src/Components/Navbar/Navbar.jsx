import React, { useContext } from 'react'
import style from './Navbar.module.css'
import {Link,NavLink} from 'react-router-dom'
import { useState } from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { CounterContext } from '../../Context/CounterContext';
import { UserContext } from '../../Context/UserContext';


export default function Navbar() {

  const {nameOne, nameTwo} =useContext(CounterContext)
  const {setToken, isLogin} =useContext(UserContext)

  console.log(nameOne, nameTwo);
  
  const [pages, setPages] = useState([
    {text:"Home", path: "/"},
    {text:"Cart", path: "/cart"},
    {text:"Categories", path: "/categories"},
    {text:"Products", path: "/products"},
    {text:"Brands", path: "/brands"},
  ])

  const [authpages, setauthPages] = useState([
    {text:"login", path: "/login"},
    {text:"register", path: "/register"},
  ])

  const [icons, seticons] = useState([
    {icons:<FaFacebook/>, URL},
    {icons:<FaInstagram/>, URL},
    {icons:<FaTwitter/>, URL},
    {icons:<FaYoutube/>, URL},
  ])
  return (
    

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center gap-4 mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Fresh Cart</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="hidden gap-4 grow w-full md:flex md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {
          pages.map(({text,path})=><li key={path}>
          <NavLink  to={path} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{text}</NavLink>
        </li>
        )
        }
      </ul>
      <ul className="font-medium ml-auto flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {
          icons.map(({icons,url})=><li key={url}>
          <a  href={url} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{icons}</a>
        </li>
        )
        }
      </ul>
      <ul className="font-medium  flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {
          authpages.map(({text,path})=><li key={path}>
          <NavLink  to={path} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{text}</NavLink>
        </li>
        )
        }
      </ul>
     
    </div>
  </div>
</nav>


  )
}
