import React from 'react';
import styles from './styles'
import { Navbar, Hero, Switcher, About, Skills } from "./components";


const App = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
      <Switcher />
      <div className={`${styles.paddingX} ${styles.flexCenter} dark:bg-slate-500 `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} dark:bg-slate-500`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} mb-10`}>
        <div className={`${styles.boxWidth} flex flex-col justify-center `}>
          <About/>
          <Skills/>
        </div>
      </div>













    </div>
  )
}
export default App;