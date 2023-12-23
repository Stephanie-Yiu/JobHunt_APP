// eslint-disable-next-line no-unused-vars
import { FaSearch, FaHome } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { RiLoginCircleLine } from 'react-icons/ri';
import { BiLogoCodepen } from 'react-icons/bi';

import { Link } from 'react-router-dom';

export default function Header() {
 return (
  <header className="bg-slate-200 shadow-md">
   <div
    className="flex justify-between items-center
     max-w-6xl mx-auto p-3">
    <div className="flex justify-center items-center ">
     {' '}
     <BiLogoCodepen className="text-slate-500 h-8 w-8" />
     <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
      <span className="text-slate-500">Job</span>
      <span className="text-slate-700">Hunt</span>
      <span></span>
     </h1>
    </div>

    <form
     className="bg-slate-100 p-3 rounded-lg
    flex items-center">
     <input
      type="text "
      placeholder="search..."
      className="bg-transparent 
      focus:outline-none w-24 sm:w-64
     "
     />
     <FaSearch className="text-slate-500" />
    </form>
    <ul className="flex gap-4 ">
     <Link
      to="/home"
      className="flex items-center 
     gap-3 justify-content: center">
      <FaHome className="text-slate-500" />
      <li
       className="hidden sm:inline
        text-slate-700 hover:underline ">
       Home
      </li>
     </Link>

     <Link
      to="/about"
      className="flex items-center
     gap-3 justify-content: center">
      <FcAbout className="text-slate-500 " />
      <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
     </Link>

     <Link
      to="sign-in"
      className="flex items-center
     gap-3 justify-content: center">
      <RiLoginCircleLine className="text-slate-500 " />
      <li className="hidden sm:inline text-slate-700 hover:underline">Sign in</li>
     </Link>
    </ul>
   </div>
  </header>
 );
}
