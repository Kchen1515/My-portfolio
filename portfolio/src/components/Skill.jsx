import React from 'react'

const Skill = ({imgSrc, key}) => {
  console.log(typeof imgSrc)
  return (
    <div className="animate-marquee">
      <img src={imgSrc} alt="skills-logo" className="w-24 object-cover"/>
    </div>
  )
}

export default Skill