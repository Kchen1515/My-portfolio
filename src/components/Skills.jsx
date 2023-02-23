import React from 'react'
import styles, {layout} from "../styles";
import { skills } from "../constants";
import Slider from './Slider'

const Skills = () => {
  return (
    <section id="skills" className={`${styles.flexCenter} flex-col w-full `}>
      <div>
        <h2 className="">Skills</h2>
      </div>
      <Slider/>


    </section>
  )
}

export default Skills