import React from 'react'
import musi from "../assets/musi.png"
import mydose from '../assets/mydose.png'
import jasmine from '../assets/jasmine.jpeg'


const Project = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="relative flex items-center">
        <div className="w-1/2 ">
          <img src={musi} alt="picture of Kong" className="rounded-lg object-cover "/>
        </div>
        <div className="
          w-1/2 border-black border-2 flex flex-col justify-center items-center h-max absolute bg-white
          left-[40%] top-[17%] p-6 rounded-lg shadow-2xl gap-7">
          <h3 className="font-semibold text-lg">Musi</h3>
          <p>Musi is a social media application that allows users to share their musical creations with musicians and fans. Users can record their songs, and post them to band pages that they are apart of.  </p>
          <button className="border-black border-2 rounded-md p-2"><a href='https://github.com/RFE-2210-CoralSea/Jamn/tree/Kong'>Github Repo</a></button>
        </div>
      </div>
      <div className="relative flex justify-end">
        <div className="w-1/2 flex justify-center">
          <img src={mydose} alt="picture of Kong" className="rounded-lg object-cover"/>
        </div>
        <div className="
          w-1/2 border-black border-2 flex flex-col justify-center items-center h-max absolute bg-white
          left-[17%] top-[30%] p-6 rounded-lg shadow-2xl gap-7">
          <h3 className="font-semibold text-lg">My Dose</h3>
          <p>My Dose is a mobile application built with React Native. The application is geared towards diabetics allowing them to quickly calculate their bolus insulin dose before meals. Users will have their core diabetic measurements such as Insulin Sensitivity Factor, Carbohydrate Ratio and Target Blood Glucose saved to their user profile and used to calculate their insulin requirements.</p>
          <button className="border-black border-2 rounded-md p-2"><a href='https://github.com/Kchen1515/My-Dose'>Github Repo</a></button>
        </div>
      </div>
      <div className="relative flex items-center">
        <div className="w-1/2">
          <img src={jasmine} alt="picture of Kong" className="rounded-lg object-cover "/>
        </div>
        <div className="
          w-1/2 border-black border-2 flex flex-col justify-center items-center h-max absolute bg-white
          left-[40%] top-[12%] p-6 rounded-lg shadow-2xl gap-7">
          <h3 className="font-semibold text-lg">Jasmine: eCommerce</h3>
          <p>Jasmine is a complete redesign of an eCommerce clothing platform. The redesign consisted of revamping the porduct overview, questions and answers, and rating and reviews sections of the webpage. The website was redesigned with full responsiveness across all devices in mind.</p>
          <button className="border-black border-2 rounded-md p-2"><a href='https://github.com/HR-Jasmine/FEC2'>Github Repo</a></button>
        </div>
      </div>

    </div>
  )
}

export default Project