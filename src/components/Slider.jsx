import React from 'react'
import Marquee from 'react-fast-marquee';
import { skills } from "../constants";


const Slider = () => {
  return (
    <div className="w-1/2 flex flex-col gap-10 m-10">
      <Marquee speed="75">
        {
          skills.slice(0,9).map((skill, i) => {
            return (
              <img src={skill.imgSrc} alt="logo of technology" className="w-[100px]  mr-[75px]"/>
            )
          })
        }
      </Marquee>
      <Marquee speed="75">
        {
          skills.slice(9,18).map((skill, i) => {
            return (
              <img src={skill.imgSrc} alt="logo of technology" className="w-[100px] mr-[75px]"/>
            )
          })
        }
      </Marquee>
    </div>
  )
}

export default Slider