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
          As a frontend developer, I am passionate about creating beautiful and intuitive user experiences that leave a lasting impression. With a keen eye for design and a solid foundation in coding, I enjoy bringing ideas to life and pushing the boundaries of what is possible on the web. From crafting responsive layouts to implementing complex animations, I take pride in every aspect of my work and strive to exceed expectations with each project. With a commitment to excellence and a constant desire to learn and grow, I am excited to tackle new challenges and help bring your vision to life.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About