import React from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

function Contact() {
  return (
    <section
      id="contacts"
      className="w-full h-[1500px] py-20 border-b-[1px] boader-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="contact" des="Contact With Me" />
      </div>
      {/* try code */}
      <div className="w-full">
        {/* left part with photo  bg-slate-300 */}
        <div className="w-full h-auto flex justify-between">
          <ContactLeft />
          {/* right part with form */}
          <ContactRight />
        </div>
      </div>
    </section>
  );
}

export default Contact;
