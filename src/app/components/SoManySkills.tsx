import React from "react";
import { SiNextdotjs, SiSupabase, SiTailwindcss } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import Skills from "./Skills";

const SoManySkills = () => {
  return (
    <div className="flex gap-2">
      <Skills toolTip="Next JS">
        <SiNextdotjs className="h-10 w-10" />
      </Skills>
      <Skills toolTip="Next JS">
        <FaReact className="h-10 w-10 animate-spin animation-duration react" />
      </Skills>
      <Skills toolTip="Next JS">
        <IoLogoJavascript className="h-10 w-10 rounded-full text-[#ffff00]" />
      </Skills>
      <Skills toolTip="Next JS">
        <BiLogoTypescript className="h-10 w-10 rounded-full text-[#3178c6]" />
      </Skills>
      <Skills toolTip="Next JS">
        <SiTailwindcss className="h-10 w-10 rounded-full text-[#38bdf8]" />
      </Skills>
      <Skills toolTip="Next JS">
        <SiSupabase className="h-10 w-10 rounded-full text-emerald-400" />
      </Skills>
      <Skills toolTip="Next JS">
        <FaNodeJs className="h-10 w-10 rounded-full text-emerald-600" />
      </Skills>
    </div>
  );
};

export default SoManySkills;
