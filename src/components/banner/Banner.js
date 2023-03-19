import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

function Banner() {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex items-center font-titleFont border-b-[1px] border-b-black gap-10"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
}

export default Banner;
