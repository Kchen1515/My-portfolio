import React from 'react';
import styles from './styles'
import { Navbar, Hero, Switcher } from "./components";


const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Switcher />

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

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        </div>
      </div>













    </div>
  )
}
export default App;