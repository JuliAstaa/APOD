import React, { useState } from "react";
import { setDate } from "../Apod/apodSlice";
import { useDispatch } from "react-redux";
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-7xl flex  justify-between items-center h-16 border-b-sky-800 border-b p-2 lg:px-8">
      <div className="h-full w-full lg:w-1/4 flex  items-center">
        <h1 className="title font-semibold text-xl text-white">
          Astronomy Picture of the Day
        </h1>
      </div>

      <div className="w-1/4 h-full relative flex justify-end ">
        <button
          aria-label="search "
          className="relative lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <IoSearchSharp className="text-white text-3xl" />
        </button>
        <div
          className={`form w-[20rem] absolute z-20  h-full transition-all ease-in-out duration-300 origin-top-right right-0 top-14 lg:top-0 lg:scale-100 ${
            open ? "scale-100" : "scale-0"
          } `}
        >
          <label htmlFor="search"></label>
          <input
            aria-label="search"
            type="date"
            name="search"
            id="search"
            className="w-full h-full text-xl   p-4  rounded-sm focus:outline-none "
            onChange={(e) => dispatch(setDate(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
