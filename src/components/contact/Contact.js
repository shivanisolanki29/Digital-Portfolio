import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full h-[1000px] py-20 border-b-[1px] boader-b-black"
    >
      {/* outer div */}
      <div className="w-[100px] h-[100px] bg-pink-200 flex gap-1">
        {/* div one */}
        <div className="w-full">
          {/* title div  (one div) */}
          <div className="text-black bg-amber-700 text-center">1</div>
          {/* card div (one div) */}
          <div className="text-black text-center bg-teal-600">2</div>
        </div>
        {/* div two */}
        <div className="w-full">
          {/* title div  (2 div) */}
          <div className="text-black bg-sky-700 text-center">3</div>
          {/* card div (2 div) */}
          <div className="text-black text-center bg-fuchsia-600">4</div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
