import React from "react";
// import { logo1 } from "../../assets";
import { logo } from "../../assets";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div
      className="w-full py-20 h-auto border-b-[1px]
     border-b-black grid grid-cols-4 gap-8"
    >
      <div className="w-full h-full flex flex-col gap-8">
        {/* logo image */}
        <img className="w-20" src={logo} alt="Logo img" />
        {/* 3 */}
        <div className="flex gap-4 ">
          <span className="bannerIcon">
            <FaFacebook />
          </span>
          <span className="bannerIcon">
            <FaGithub />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
      {/* Quick Link */}
      <div className="w-full h-full">
        <h3
          className="text-xl uppercase
         text-designColor tracking-wider"
        >
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-title-font font-medium py-6 overflow-hidden">
          <li>
            <span
              className="w-full text-lg hover:text-designColor relative
          duration-300 cursor-pointer group"
            >
              About
              <span
                className="absolute w-full h-[1px] inline-flex
                 bg-designColor duration-300 -bottom-1 left-0 -translate-x-[100%]
                 group-hover:translate-x-0 transition-transform"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor relative
          duration-300 cursor-pointer group"
            >
              Portfolio
              <span
                className="absolute w-full h-[1px] inline-flex
                 bg-designColor duration-300 -bottom-1 left-0 -translate-x-[100%]
                 group-hover:translate-x-0 transition-transform"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor relative
          duration-300 cursor-pointer group"
            >
              Services
              <span
                className=" absolute w-full h-[1px] inline-flex
                 bg-designColor duration-300 -bottom-1 left-0  -translate-x-[100%]
                 group-hover:translate-x-0 transition-transform"
              ></span>
            </span>
          </li>
          <li>
            {" "}
            <span
              className="w-full text-lg hover:text-designColor relative
          duration-300 cursor-pointer group"
            >
              Blog
              <span
                className=" absolute w-full h-[1px] inline-flex
                 bg-designColor duration-300 -bottom-1 left-0  -translate-x-[100%]
                 group-hover:translate-x-0 transition-transform"
              ></span>
            </span>
          </li>
          <li>
            {" "}
            <span
              className="w-full text-lg hover:text-designColor relative
          duration-300 cursor-pointer group"
            >
              Contact
              <span
                className=" absolute w-full h-[1px] inline-flex
                 bg-designColor duration-300 -bottom-1 left-0  -translate-x-[100%]
                 group-hover:translate-x-0 transition-transform"
              ></span>
            </span>
          </li>
        </ul>
      </div>
      {/* Resources */}
      <div className="w-full h-full">
        <h3
          className="text-xl uppercase
         text-designColor tracking-wider"
        >
          Resources
        </h3>
        <ul className="flex flex-col gap-4 font-title-font font-medium py-6 overflow-hidden">
          <li>
            <span
              className="w-full text-lg hover:text-designColor relative
          duration-300 cursor-pointer group"
            >
              Authentication
              <span
                className="absolute w-full h-[1px] inline-flex
                 bg-designColor duration-300 -bottom-1 left-0 -translate-x-[100%]
                 group-hover:translate-x-0 transition-transform"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor relative
          duration-300 cursor-pointer group"
            >
              System Status
              <span
                className="absolute w-full h-[1px] inline-flex
                 bg-designColor duration-300 -bottom-1 left-0 -translate-x-[100%]
                 group-hover:translate-x-0 transition-transform"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor relative
          duration-300 cursor-pointer group"
            >
              Term of Service
              <span
                className=" absolute w-full h-[1px] inline-flex
                 bg-designColor duration-300 -bottom-1 left-0  -translate-x-[100%]
                 group-hover:translate-x-0 transition-transform"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor relative
          duration-300 cursor-pointer group"
            >
              Pricing
              <span
                className=" absolute w-full h-[1px] inline-flex
                 bg-designColor duration-300 -bottom-1 left-0  -translate-x-[100%]
                 group-hover:translate-x-0 transition-transform"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor relative
          duration-300 cursor-pointer group"
            >
              Over Right
              <span
                className=" absolute w-full h-[1px] inline-flex
                 bg-designColor duration-300 -bottom-1 left-0  -translate-x-[100%]
                 group-hover:translate-x-0 transition-transform"
              ></span>
            </span>
          </li>
        </ul>
      </div>
      {/* Developers */}
      <div className="w-full h-full">
        <h3
          className="text-xl uppercase
         text-designColor tracking-wider"
        >
          Developers
        </h3>
        <ul className="flex flex-col gap-4 font-title-font font-medium py-8 overflow-hidden">
          <li>
            <span
              className="w-full text-lg hover:text-designColor relative
          duration-300 cursor-pointer group"
            >
              Documentation
              <span
                className="absolute w-full h-[1px] inline-flex
                 bg-designColor duration-300 -bottom-1 left-0 -translate-x-[100%]
                 group-hover:translate-x-0 transition-transform"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor relative
          duration-300 cursor-pointer group"
            >
              Aurhentication
              <span
                className="absolute w-full h-[1px] inline-flex
                 bg-designColor duration-300 -bottom-1 left-0 -translate-x-[100%]
                 group-hover:translate-x-0 transition-transform"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor relative
          duration-300 cursor-pointer group"
            >
              API Reference
              <span
                className=" absolute w-full h-[1px] inline-flex
                 bg-designColor duration-300 -bottom-1 left-0  -translate-x-[100%]
                 group-hover:translate-x-0 transition-transform"
              ></span>
            </span>
          </li>
          <li>
            {" "}
            <span
              className="w-full text-lg hover:text-designColor relative
          duration-300 cursor-pointer group"
            >
              Support
              <span
                className=" absolute w-full h-[1px] inline-flex
                 bg-designColor duration-300 -bottom-1 left-0  -translate-x-[100%]
                 group-hover:translate-x-0 transition-transform"
              ></span>
            </span>
          </li>
          <li>
            {" "}
            <span
              className="w-full text-lg hover:text-designColor relative
          duration-300 cursor-pointer group"
            >
              Open Source
              <span
                className=" absolute w-full h-[1px] inline-flex
                 bg-designColor duration-300 -bottom-1 left-0  -translate-x-[100%]
                 group-hover:translate-x-0 transition-transform"
              ></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
