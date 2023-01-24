import React from 'react'
import styles, {layout} from "../styles";
import Project from './Project.jsx'
import { projectDetails } from "../constants";



const Projects = () => {
  return (
    <section id="about" className={`${styles.flexCenter} flex-col w-full mb-20`}>
      <div className="mb-10">
        <h3 className="font-semibold text-4xl text-gray-500 tracking-wider ">PROJECTS</h3>
      </div>
      <div className="w-full mb-20 flex items-center justify-evenly">
        {
          projectDetails.map((project) => {
            return (
              <Project/>
            )
          })
        }
      </div>

    </section>
  )
}

export default Projects