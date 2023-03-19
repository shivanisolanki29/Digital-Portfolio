import React from "react";
import { bannerImg } from "../../assets";

function RightBanner() {
  return (
    <section
      className="w-1/2 
           flex
           justify-center
           items-center
           relative"
    >
      {/* <div
        className="w-1/2 
      flex justify-center
       items-center relative
        bg-pink-200" */}
      {/* > */}
      <img
        className="w-[380px] h-[680px] z-10"
        // className="w-[300px] h-[480px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div
        // className="absolute bottom-0 w-[400px]
        //  h-[450px] bg-gradient-to-r from-[#1e2024] to-[#202327]
        //  shadow-shadowOne bg-grey-300 flex justify-center items-center"
        className="absolute bottom-0 w-[500px]
        h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327]
        shadow-shadowOne bg-grey-300 flex justify-center items-center"
      ></div>
      {/* </div> */}
    </section>
  );
}

export default RightBanner;
