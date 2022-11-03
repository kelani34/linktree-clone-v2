import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Contact.css'
function Contact() {

    function validateForm() {
        let x = document.forms["myForm"]["firstName"].value;
        const reqs = document.getElementsByClassName('form-control')
        const rtext = document.getElementsByClassName('requires')
        if (x == "") {
          for (const text of rtext){
            text.classList.remove('hidden')
          }
          
          for (const req of reqs){
          req.classList.add('border', 'border-solid', 'border-red-300', 'focus:ring-red-200', 'focus:ring-4', 'focus:ring-opacity-50')
          }
          return false;
        }
        else{
          for (const text of rtext){
            text.classList.add('hidden')
          }
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

      <form name='myForm' action="https://formsubmit.co/kelanitaiwo34@gmail.com" onSubmit={validateForm} method="POST" >
        <div className="form-group mb-6 flex space-x-6">
            <div className='w-6/12'>
                <label htmlFor="first_name" className='block text-left my-2'>First name</label>
          <input 
          name='firstName' 
          type="text" 
          className="form-control block
            w-full
            m-0
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded-lg
            transition
            ease-in-out
            m-0
            inline mr-5
            focus:text-gray-700 focus:bg-white focus:ring-blue-200 focus:ring-4 focus:ring-opacity-50" 
            id="first_name"
            placeholder="First Name"
            />
            <p className="text-red-500 text-xs italic mt-2 hidden requires">Please input your first name</p>
            </div>
            <div className='w-6/12'>
                <label htmlFor="last_name" className='block text-left my-2'>Last name</label>
          <input 
          type="text" 
          name='lastName'
          className="form-control block
            w-full
            m-0
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded-lg
            transition
            ease-in-out
            m-0
            inline mr-5
            focus:text-gray-700 focus:bg-white focus:ring-blue-200 focus:ring-4 focus:ring-opacity-50" 
            id="last_name"
            placeholder="Last Name"
            />
            <p className="text-red-500 text-xs italic mt-2 hidden requires">Please input your last name</p>
            </div>
        </div>
        <div className="form-group mb-6">
        <label htmlFor="email" className='block text-left my-2'> Email</label>
          <input 
          name='email'
          type="email" 
          className="block 
          form-control
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded-lg
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:ring-blue-200 focus:ring-4 focus:ring-opacity-50
            peer ..." 
            id="email"
            placeholder="youremail@example.com"
            
             />
            <p className="mt-2 invisible peer-invalid:visible text-red-600 text-sm">Please enter a valid Email address</p>
        </div>
        <div className="form-group mb-6">
        <label htmlFor="message" className='block text-left my-2'>Message</label>
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
            rounded-lg
            transition
            ease-in-out
            m-0
            resize-none
            focus:text-gray-700 focus:bg-white focus:ring-blue-200 focus:ring-4 focus:ring-opacity-50 message" 
            id="message" 
            rows="3" 
            placeholder="Send me a message and I'll reply you as soon as possible..." ></textarea>
          <p className="text-red-500 text-xs italic mt-2 hidden requires">Please enter a message</p>
        </div>
        
        <div className="form-group form-check mb-6">
          <input type="checkbox"
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white  checked:border-blue-600 focus:ring-blue-200 focus:ring-4 focus:ring-opacity-50 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
            id="exampleCheck87"
            required
            />
          <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck87">You agree to providing your data to Taiwo Shina-kelani who may contact you.</label>
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
          rounded-lg
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
          id="btn__submit"
          >Send</button>
          <input type="hidden" name="_next" value='https://kelani-linktr-ee-v2.netlify.app/thanks'></input>
          <input type="hidden" name="_captcha" value="false"></input>
      </form>
</div>
        </div>
        <Footer />
    </>
  )
}

export default Contact