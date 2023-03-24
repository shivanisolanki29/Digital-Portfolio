import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex w-full gap-20 "
    >
      <div className="w-full">
        {/* <div className="flex flex-col gap-4"> */}
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2011</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>

        {/* left side 3-resume cards */}
        <div
          className="w-full mt-14 h-[1000px] border-l-[6px] 
border-black border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="BE in Computer Science"
            subtitle="RGTU University"
            result="6.9/10"
            des="RGTU University RGTU Universityv RGTU University"
          />
          <ResumeCard
            title="School"
            subtitle="M.L.B.School Balaghat (M.P.)"
            result="8/10"
            des="School math science chemestry, physics, Maths"
          />
          <ResumeCard />
        </div>
      </div>
      <div className="w-full">
        {/* Second education */}
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2011 - 2015</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        {/* right side 3-resume cards */}

        <div
          className="w-full mt-14 h-[1000px] border-l-[6px] 
border-black border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="Full Stack Developer"
            subtitle="Test Yantra Software Solution B.V, Utrecht"
            result="6.9/10"
            des="Efficiently implemented a variety of full-stack features, including RESTful
        APIs with C# and ASP.NET Web API, server-side views with C# and ASP.NET
        MVC 5, and dynamic client-side interfaces with Ajax, JSON, jQuery & React
        js.
        Sourc"
          />
          <ResumeCard
            title="Test Automation Engineer"
            subtitle="
        Whale Cloud Technology. B. V, Netherland"
            result="10/10"
            des="
        Responsible for automated /manual Functional testing of Telco COTS
        product OSS/BSS (ZSMART).
        Gathered information from the project team, designs, develops, unit tests,
        debugs, executes automated test cases, and prepares reports
        Worked in an agile/scrum environment using JIRA and JIRA ServiceDesk
        to manage most work and facilitate Daily Stand-up’s, Sprint
        Planning/Backlog Refinement, and Sprint Demonstrations."
          />
          <ResumeCard
            title="Test Automation Engineer"
            subtitle="
       Whale Cloud Technology. B. V, Netherland"
            result="10/10"
            des="
       Responsible for automated /manual Functional testing of Telco COTS
       product OSS/BSS (ZSMART).
       Gathered information from the project team, designs, develops, unit tests,
       debugs, executes automated test cases, and prepares reports
       Worked in an agile/scrum environment using JIRA and JIRA ServiceDesk
       to manage most work and facilitate Daily Stand-up’s, Sprint
       Planning/Backlog Refinement, and Sprint Demonstrations."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
