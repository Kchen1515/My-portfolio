import React from 'react'
import { useForm } from "react-hook-form";


const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10">
      <div>
        <h2>Contact</h2>
      </div>

      <div>
        <form className="flex flex-col gap-4">
          <div className=" flex flex-nowrap gap-4">
            <input name="firstName" type="text" placeholder="First Name" className="border-2 border-black p-2 "/>
            <input name="lastName" type="text" placeholder="Last Name" className="border-2 border-black p-2 "/>
          </div>
          <input name="lastName" type="email" placeholder="Email" className="border-2 border-black p-2 "/>
          <textarea name="message" placeholder="Message" cols="20" rows="5" className="border-2 border-black p-2 "/>
          <button type="submit" className="border-2 border-black p-2"> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact