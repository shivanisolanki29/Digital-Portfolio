import React, { useState } from "react";
import Title from "../layouts/Title";
import Achievement from "./Achievement";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
// import Achievements from "./Achievement";
// import Experience from "./Experience";
// import Skills from "./Skills";

function Resume() {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setexperienceData] = useState(false);
  const [achievementData, setachievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="5+ years of Experience" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setachievementData(false) &
              setexperienceData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            }
            resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setachievementData(false) &
              setexperienceData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            }
            resumeLi`}
          >
            Professtional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setachievementData(false) &
              setexperienceData(true)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            }
            resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setachievementData(true) &
              setexperienceData(false)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            }
            resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
      {experienceData && <Experience />}
    </section>
  );
}

export default Resume;
