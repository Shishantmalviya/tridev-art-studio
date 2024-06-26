import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import {AiOutlineMenu} from 'react-icons/ai'
import { useSelector} from 'react-redux'

const navLinks = [
  { name: "home", value: "" },
  { name: "category", value: "category" },
  { name: "blog", value: "blog" },
  { name: "about", value: "about" },
  { name: "contact", value: "contact" },
]

export default function Header() {
  const [navShow, setNavShow] = useState(true);
  const {currentUser} = useSelector(state=>state.user)
  const handlereset=()=>{
    setNavShow(false)
  }
  return (
    <header>
      <div className="flex fixed w-full top-0 justify-between sm:px-20 sm:py-4  items-center backdrop-blur-xl shadow-md">
        <Link to="/" className="text-2xl font-bold font-sans">
          <span className="text-orange-600">Tri</span>
          <span className="text-purple-500">Dev</span> Art
        </Link>
        <form className="bg-slate-500 hidden sm:flex gap-2 items-center px-4 p-2 rounded-full w-[30%] shadow-lg">
          <AiOutlineSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none text-white w-full"
          />
        </form>

        <div className="hidden sm:flex gap-12 items-center">
          {navLinks.map((item, index) => (
            <Link
              to={`/${item.value}`}
              className="uppercase hover:underline"
              key={index}
            >
              {item.name}
            </Link>
          ))}
          
          { currentUser ? <Link to='/profile'><img src="defuser.png" className="w-9 h-9" alt="image"/></Link>: (
            <div className="uppercase gap-4 flex">
            <Link to="/signup" onClick={handlereset} className="hover:underline">signup</Link>
            <Link to="/signin" onClick={handlereset} className="hover:underline">SignIn</Link>
          </div>
          ) }
        </div>

        {/* <div className={`absolute ${navShow? "flex":"hidden"} flex p-4 w-full text-white flex-col left-0 items-center top-16 gap-5 bg-slate-700 sm:relative sm:hidden`}>
          {navLinks.map((item, index) => (
            <Link
              to={`/${item.value}`}
              onClick={handlereset}
              className="uppercase hover:underline"
              key={index}
            >
              {item.name}
            </Link>
          ))}

          { currentUser !==null? <img src="" alt="" /> : 
            <div className="uppercase gap-4 flex">
            <Link to="/signup" onClick={handlereset} className="hover:underline">signup</Link>
            <Link to="/signin" onClick={handlereset} className="hover:underline">SignIn</Link>
          </div>
           }
          
        </div> */}
        <AiOutlineMenu onClick={()=>{navShow ? setNavShow(false): setNavShow(true)}} className="text-2xl sm:hidden"/>
      </div>
    </header>
  );
}
