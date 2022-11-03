import React from 'react'
import './Contact.css'
function Contact() {

    function validateForm() {
        let x = document.forms["myForm"]["fname"].value;
        const reqs = document.getElementsByClassName('form-control')
        if (x == "") {
          document.querySelector('.requires').classList.remove('hidden')
          
          for (const req of reqs){
          req.classList.add('border', 'border-solid', 'border-red-300', 'focus:ring-red-200', 'focus:ring-4', 'focus:ring-opacity-50')
          }
          return false;
        }
        else{
          document.querySelector('.requires').classList.add('hidden')
          for (const req of reqs){
          req.classList.remove('border-red-300', 'focus:ring-red-200', 'focus:ring-4', 'focus:ring-opacity-50')
          }
        }
      }
  return (
    <>
        <div className='w-full h-screen flex'>
            <div className='w-6/12 m-auto'>
                <h1 className='text-3xl font-medium'>Contact me</h1>
                <p className='text-slate-400 mt-4 mb-10'>Hi there Ask me about anything you have in mind.</p>

      <form name='myForm' onSubmit={(e) => {
        e.preventDefault()
        
      }} >
        <div className="form-group mb-6 flex space-x-6">
            <div className='w-6/12'>
                <label htmlFor="" className=''><span className='block text-left my-2'>First name</span>
          <input name='fname' type="text" className="form-control block
            w-full
            m-0
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
            focus:text-gray-700 focus:bg-white focus:ring-blue-200 focus:ring-4 focus:ring-opacity-50" id="exampleInput7"
            placeholder="First Name"
            />
            <p className="text-red-500 text-xs italic mt-2 hidden requires">Please input your first name</p>
            </label>
            </div>
            <div className='w-6/12'>
                <label htmlFor="" className='block text-left my-2'><span className='block text-left my-2'>Last name</span>
          <input type="text" className="form-control block
            w-full
            m-0
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
            focus:text-gray-700 focus:bg-white focus:ring-blue-200 focus:ring-4 focus:ring-opacity-50" id="exampleInput7"
            placeholder="Last Name"
            />
            <p className="text-red-500 text-xs italic mt-2 hidden requires">Please fill in your last Name</p>
            </label>
            </div>
        </div>
        <div className="form-group mb-6">
        <label htmlFor="" className='block text-left my-2'> <span className='block text-left my-2'>First name</span>
          <input type="email" className="block
          form-control
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
            focus:text-gray-700 focus:bg-white focus:ring-blue-200 focus:ring-4 focus:ring-opacity-50
            peer ...
            " id="exampleInput8"
            placeholder="youremail@example.com"
             />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">Please fill in your e-mail address</p>
            </label>
        </div>
        <div className="form-group mb-6">
        <label htmlFor="" className='block text-left my-2'><span className='block text-left my-2'>First name</span>
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
            focus:text-gray-700 focus:bg-white focus:ring-blue-200 focus:ring-4 focus:ring-opacity-50 message
            
          " id="exampleFormControlTextarea13" rows="3" placeholder="Send me a message and I'll reply you as soon as possible..." ></textarea>
          <p className="text-red-500 text-xs italic mt-2">Please enter a message</p>
          </label>
        </div>
        
        <div className="form-group form-check mb-6">
          <input type="checkbox"
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white  checked:border-blue-600 focus:ring-blue-200 focus:ring-4 focus:ring-opacity-50 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
            id="exampleCheck87"/>
          <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck87">Send me a copy of this
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
          ease-in-out"
          onClick={validateForm}>Send</button>
      </form>
</div>
        </div>
    </>
  )
}

export default Contact