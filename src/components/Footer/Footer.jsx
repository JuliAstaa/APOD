import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full  mt-8 bg-black p-2 lg:p-8">
      <div className="flex flex-col lg:flex-row gap-8 w-full h-full">
        <div className="title w-full lg:w-1/4">
          <div className="h-full flex lg:justify-center lg:items-center">
            <h1 className="title font-semibold text-xl text-white">
              Astronomy Picture of the Day
            </h1>
          </div>
        </div>
        <div className="hidden lg:block line w-[1px] h-auto bg-sky-800"></div>
        <div className="w-full lg:w-3/4 grid grid-cols-1 lg:grid-cols-2  gap-8">
          <div className="about">
            <h1 className="text-white font-semibold text-lg">About Us</h1>
            <p className="text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio eligendi totam sunt repudiandae eum repellendus placeat
              esse ipsam molestias at!
            </p>
          </div>
          <div className="API">
            <h1 className="text-white font-semibold text-lg">NASA API</h1>
            <p className="text-slate-300">
              I used the API from{" "}
              <a
                href="https://api.nasa.gov/"
                target="_blank"
                className="hover:text-sky-500"
              >
                https://api.nasa.gov/
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="copyright border-t mt-8 w-full h-16 flex justify-center items-center">
        <p className="text-slate-400 text-center">
          Copyright © All Right Reserved. | Design with ❤️ by{" "}
          <a href="https://instagram.com/juliasta._" target="_blank">
            Juliasta
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
