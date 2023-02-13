import React from 'react';
import styles from './styles'
import { Navbar, Hero, About, Skills, Projects, Contact } from "./components";


const App = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col items-center justify-center">
      <div className="w-[90%]">
        <Navbar/>
      </div>

      <div className="w-[70%]">
        <Contact/>
      </div>

      {/* <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} mb-10`}>
        <div className={`${styles.boxWidth} flex flex-col justify-center `}>
          <About/>
          <Skills/>
          <Projects/>
        </div>
      </div> */}













    </div>
  )
}
export default App;