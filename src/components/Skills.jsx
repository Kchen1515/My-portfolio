import React from 'react'
import styles, {layout} from "../styles";
import { skills } from "../constants";
import Skill from './Skill.jsx'

const Skills = () => {
  return (
    <section id="skills" className={`${styles.flexCenter} flex-col w-full `}>
      <div className="mb-5">
        <h3 className="font-semibold text-4xl text-gray-500 tracking-widest border-b-4 border-blue-800">SKILLS</h3>
      </div>
      <div class="relative flex overflow-x-hidden w-3/4">
        <div class="py-8 animate-marquee whitespace-nowrap">
          {skills.slice(0,6).map((skill, i) => {
            return <img src={skill.imgSrc} key={skill.id} className="w-24 mx-5"/>
          })}
        </div>
        <div class="absolute top-0 py-8 animate-marquee2 whitespace-nowrap">
          {skills.slice(0,6).map((skill, i) => {
            return <img src={skill.imgSrc} key={skill.id} className="w-24 mx-5"/>
          })}
        </div>
      </div>
      <div class="relative flex overflow-x-hidden w-3/4">
        <div class="py-8 whitespace-nowrap animate-marquee3">
          {skills.slice(6,12).map((skill, i) => {
            return <img src={skill.imgSrc} key={skill.id} className="w-24 mx-5"/>
          })}
        </div>
        <div class="absolute top-0 py-8 animate-marquee4 whitespace-nowrap">
          {skills.slice(6,12).map((skill, i) => {
            return <img src={skill.imgSrc} key={skill.id} className="w-24 mx-5"/>
          })}
        </div>
      </div>
      <div class="relative flex overflow-x-hidden w-3/4">
        <div class="py-8 whitespace-nowrap animate-marquee">
          {skills.slice(12,18).map((skill, i) => {
            return <img src={skill.imgSrc} key={skill.id} className="w-24 mx-5"/>
          })}
        </div>
        <div class="absolute top-0 py-8 animate-marquee2 whitespace-nowrap">
          {skills.slice(12,18).map((skill, i) => {
            return <img src={skill.imgSrc} key={skill.id} className="w-24 mx-5"/>
          })}
        </div>
      </div>



    </section>
  )
}

export default Skills