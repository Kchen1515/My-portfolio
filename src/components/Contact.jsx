import React from 'react'
import { useForm } from "react-hook-form";


const Contact = () => {
  const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    window.location.href = `mailto:kychen249@gmail?subject=${data.subject}&body=Hello, my name is ${data.fullName}. ${data.message}`
    reset();
  };

  return (
    <section className="flex flex-col items-center justify-center gap-10 ">
      <div>
        <h2 className="">CONTACT</h2>
      </div>

      <div>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
          >
          <div className=" flex flex-nowrap gap-4 justify-between">
            <input {...register('fullName')} name="fullName" type="text" placeholder="Full Name" className="border-2 border-black p-2 w-[50%] "/>
            <input {...register('email')} name="email" type="email" placeholder="Email" className="border-2 border-black p-2 w-[50%] "/>
          </div>
          <input {...register('subject')} name="subject" type="text" placeholder="Subject" className="border-2 border-black p-2 "/>
          <textarea {...register('message')} name="message" placeholder="Message" cols="20" rows="5" className="border-2 border-black p-2 "/>
          <button type="submit" className="border-2 border-black p-2"> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact