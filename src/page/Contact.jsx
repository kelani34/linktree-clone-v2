import React from 'react'

function Contact() {
  return (
    <>
        <div className='w-full h-screen flex'>
            <div className='w-6/12 m-auto'>
                <h1 className='text-3xl font-medium'>Contact me</h1>
                <p className='text-slate-400 mt-6'>Hi there Ask me about anything you have in mind</p>
<div className="container my-24 px-6 mx-auto">

  <section className="mb-32 text-center text-gray-800">
    <div className="max-w-[700px] mx-auto px-3 lg:px-6">
      <form>
        <div className="form-group mb-6 flex ">
          <input type="text" className="form-control block
            w-6/12
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            inline mr-5
            focus:text-gray-700 focus:bg-white focus:ring-blue-500/50 focus:outline-none" id="exampleInput7"
            placeholder="First Name"
            required="required" />
          <input type="text" className="form-control block
            w-6/12
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            inline
            focus:text-gray-700 focus:bg-white focus:ring-blue-500/50 focus:outline-none" id="exampleInput7"
            placeholder="First Name"
            required="required" />
        </div>
        <div className="form-group mb-6">
          <input type="email" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:ring-blue-500/50 focus:outline-none" id="exampleInput8"
            placeholder="Email address"
            required="required"
            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" />
        </div>
        <div className="form-group mb-6">
          <textarea className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            resize-none
            focus:text-gray-700 focus:bg-white focus:ring-blue-200 focus:ring-4 focus:ring-opacity-50 focus:outline-1 focus:outline-blue-400
          " id="exampleFormControlTextarea13" rows="3" placeholder="Message" required="required"></textarea>
        </div>
        <div className="form-group form-check text-center mb-6">
          <input type="checkbox"
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
            id="exampleCheck87" checked />
          <label className="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this
            message</label>
        </div>
        <button type="submit" className="
          w-full
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">Send</button>
      </form>
    </div>
  </section>
</div>
            </div>
        </div>
    </>
  )
}

export default Contact