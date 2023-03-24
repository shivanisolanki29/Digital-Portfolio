import React from "react";
import { contactImg } from "../../assets";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

function ContactLeft() {
  return (
    <div
      className="w-[35%] p-8 gap-8 bg-gradient-to-r from-[#1e2024] to-[#23272b]
   shadow-shadowOne rounded-lg flex flex-col justify-center"
    >
      <img
        src={contactImg}
        alt="Contact img"
        className="w-full h-64 object-cover rounded-lg mb-2 "
      />
      <div className="flex flex-col gap-4 ">
        <h3 className="text-3xl font-bold text-white">John Deo</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+968 978564732</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          <span className="text-lightText">John.deo@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft;
