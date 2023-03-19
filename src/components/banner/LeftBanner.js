import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebook, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFigma } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder & Tester.",
      "Full Stack Developer.",
      "Full Time Mom.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className=" w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className=" text-6xl font-bold ">
          Hi,I'm{" "}
          <span className="text-designColor capitalize">shivani solanki</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorColor="#16a34a"
            cursorStyle="|"
          />
        </h2>
        <p className="text-ellipsis">
          {" "}
          I m software engginer with a pas sion for coding and also experince in
          Automation and manual testing fghdgsjk sdhlkj hlkjhdsga heko djkj
          sdfbb hdgs.{" "}
        </p>
      </div>
      <div className="flex justify-between">
        {/* //find me div */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            find me in
          </h2>
          <div className="flex gap-4">
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
        {/* //Best skill */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            best skill on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
