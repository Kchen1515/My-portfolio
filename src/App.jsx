import React from 'react';
import styles from './styles'
import { Navbar, Hero, About, Skills, Projects } from "./components";


const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
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
      </div>













    </div>
  )
}
export default App;