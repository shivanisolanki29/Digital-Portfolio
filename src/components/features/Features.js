import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe, FaMobile } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

function Features() {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I do" />
      <div className="grid grid-cols-3 gap-20">
        <Card
          title="Bussiness Stratagy"
          des="Ridiculus conubia tristique quam.
           Lorem, urna ornare magnis pharetra vestibulum
            condimentum. Lectus dignissim litora dis;
          ."
        />
        <Card
          title="App Development"
          des="Ridiculus conubia tristique quam.
         Lorem, urna ornare magnis pharetra vestibulum
          condimentum. Lectus dignissim litora dis;
        "
          icon={<AiFillAppstore />}
        />

        <Card
          title="SEO Optimisation"
          des="Ridiculus conubia tristique quam.
         Lorem, urna ornare magnis pharetra vestibulum
          condimentum. Lectus dignissim litora dis."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="Ridiculus conubia tristique quam.
         Lorem, urna ornare magnis pharetra vestibulum
          condimentum. Lectus dignissim litora dis Porta."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Ridiculus conubia tristique quam.
         Lorem, urna ornare magnis pharetra vestibulum
          condimentum. Lectus dignissim nam tristique tellus lectus. Porta."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Website"
          des="Ridiculus conubia tristique quam.
         Lorem, urna ornare magnis pharetra vestibulum Sit himenaeos eu 
        nam tristique tellus lectus. Porta."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features;
