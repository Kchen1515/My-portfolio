import React from 'react'
import Marquee from 'react-fast-marquee';
import { skills } from "../constants";


const Slider = () => {
  return (
    <div className="w-full flex flex-col gap-10 m-10">
      <Marquee
        speed="75"
        pauseOnHover="true"
        gradientWidth={100}
      >
        {
          skills.slice(0,9).map((skill, i) => {
            return (
              <img src={skill.imgSrc} alt="logo of technology" className="w-[50px]  mr-[75px] sm:w-[100px]"/>
            )
          })
        }
      </Marquee>
      <Marquee
        speed="75"
        pauseOnHover="true"
        direction='right'
        gradientWidth={100}
      >
        {
          skills.slice(9,18).map((skill, i) => {
            return (
              <img src={skill.imgSrc} alt="logo of technology" className=" w-[50px] mr-[75px] sm:w-[100px]"/>
            )
          })
        }
      </Marquee>
    </div>
  )
}

export default Slider