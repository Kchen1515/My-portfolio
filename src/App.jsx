import React from 'react';
import styles from './styles'
import { Navbar, Hero, About, Skills, Projects, Contact, Slider } from "./components";


const App = () => {
  return (
    <div className="w-[100vw] overflow-hidden flex flex-col items-center justify-center">
      <div className="w-[90%]">
        <Navbar/>
      </div>

      <div className="w-[80%] p-2 flex flex-col items-center">
        <Hero/>
        {/* <About/> */}
        <Skills/>
        <Contact/>
      </div>
    </div>
  )
}
export default App;