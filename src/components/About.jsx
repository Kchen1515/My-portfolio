import React from 'react'
import styles, {layout} from "../styles";
import me from "../assets/me.png"


const About = () => {
  return (
    <section id="about" className={`${styles.flexCenter} flex-col w-full mb-20`}>
      <div className="mb-10">
        <h3 className="font-semibold text-4xl text-gray-500 tracking-wider ">ABOUT ME</h3>
      </div>

      <div className={`${styles.flexCenter} flex-col gap-10 sm:flex-row sm:w-3/4 `}>
        <div >
          <img src={me} alt="picture of Kong" className="rounded-lg object-cover w-60 sm:w-max"/>
        </div>
        <div>
          <p className="leading-relaxed">
            As a fullstack engineer with a strong focus on front end development, I am constantly seeking out new and innovative ways to create seamless and intuitive user experiences.
            With a solid foundation in both back end technologies and front end design principles, I am well-equipped to tackle any project that comes my way.
            I have a passion for building clean and efficient code, and I am always looking for ways to improve my skills and stay up-to-date with the latest trends in the industry.
            I am a strong believer in the power of collaboration, and I thrive in team environments where I can work with others to solve complex problems and bring new ideas to life.
            Whether I am working on a large-scale web application or a simple landing page, I am committed to delivering high-quality solutions that meet the needs of my clients and users.
            I am excited to continue my journey as a fullstack engineer, and I am always open to new opportunities to learn, grow, and make a positive impact in the world of front end development.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About