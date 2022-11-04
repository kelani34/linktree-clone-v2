import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Contact.css'
function Contact() {

  const name = 'Taiwo Shina-Kelani'
    function validateForm() {
        let x = document.forms["myForm"]["firstName"].value;
        
        const rtext = document.getElementsByClassName('requires')
        if (x == "") {
          const rtext = document.getElementsByClassName('requires')
          for (const text of rtext){
            text.classList.remove('hidden')
          }
          const reqs = document.getElementsByClassName('form-control')
          for (const req of reqs){
            req.classList.remove('border-gray-300', 'focus:ring-blue-200', 'focus:ring-4', 'focus:ring-opacity-50', 'input')
          req.classList.add('border', 'border-solid', 'border-red-300', 'focus:ring-red-200', 'focus:ring-4', 'focus:ring-opacity-50', 'rm-ou')
          }
          document.getElementById('btn__submit').disabled = true;

          setTimeout(() => {
            document.getElementById('btn__submit').removeAttribute('disabled');
          }, "4000")

          return false;
        }
        else if (x !== ""){
          const rtext = document.getElementsByClassName('requires')
          for (const text of rtext){
            text.classList.add('hidden')
          }
          const reqs = document.getElementsByClassName('form-control')
          for (const req of reqs){
          req.classList.remove('border-red-300', 'focus:ring-red-200', 'focus:ring-4', 'focus:ring-opacity-50')
          }
          return true;
        }
      }
  return (
    <>
        <div className='md:flex lg:flex  cont-box h-screen m-16'>
            <div className='lg:w-6/12 md:w-6/12 md:m-auto lg:m-auto'>
              <div>
                <h1 className='text-3xl font-medium mb-5'>Contact me</h1>
                <p className='text-slate-400 mt-4 mb-12'>Hi there Ask me about anything you have in mind.</p>
            </div>
      <div>
      <form name='myForm' action="https://formsubmit.co/kelanitaiwo34@gmail.com" method="POST">
        <div className="form-group flex flex-wrap name-group">
            <div className=' name-box'>
                <label htmlFor="first_name" className='block text-left mb-1.5'>First name</label>
          <input 
          id="first_name"
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
            mb-6
            inline mr-5
            focus:text-gray-700 focus:bg-white focus:ring-blue-200 focus:ring-4 focus:ring-opacity-50 input" 
            placeholder="First Name"
            />
            <p className="text-red-500 text-xs font-medium mt-2 hidden requires">Please input your first name</p>
            </div>
            <div className='name-box'>
                <label htmlFor="last_name" className='block text-left mb-1.5'>Last name</label>
          <input 
          id="last_name"
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
            mb-6
            inline mr-5
            focus:text-gray-700 focus:bg-white focus:ring-blue-200 focus:ring-4 focus:ring-opacity-50 input" 
            placeholder="Last Name"
            />
            <p className="text-red-500 text-xs font-medium mt-2 hidden requires">Please input your last name</p>
            </div>
        </div>
        <div className="form-group">
        <label htmlFor="email" className='block text-left mb-1.5'> Email</label>
          <input 
          id="email"
          name='email'
          type="email" 
          className="block 
          form-control
          w-full
          shrink
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
            focus:text-gray-700 focus:bg-white focus:ring-blue-200 focus:ring-4 focus:ring-opacity-50 input
            peer ..." 
            placeholder="youremail@example.com"
            
             />
            <p className=" invisible peer-invalid:visible text-red-600 text-xs font-medium">Please enter a valid Email address</p>
            <p className="text-red-500 text-xs font-medium hidden requires">Please input your email</p>
        </div>
        <div className="form-group mb-6">
        <label htmlFor="message" className='block text-left mb-1.5'>Message</label>
          <textarea 
          id="message" 
          name="message"
          className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300 focus:ring-blue-200 focus:ring-4 focus:ring-opacity-50 input
            rounded-lg
            transition
            ease-in-out
            m-0
            resize-none
            focus:text-gray-700 focus:bg-white " 
            rows="3" 
            placeholder="Send me a message and I'll reply you as soon as possible..." ></textarea>
          <p className="text-red-500 text-xs font-medium mt-2 hidden requires">Please enter a message</p>
        </div>
        
        <div className="form-group form-check mb-6 flex">
          <div className='inline'>
          <input type="checkbox"
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white  checked:border-blue-600 focus:ring-blue-200 focus:ring-4 focus:ring-opacity-50 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
            id="checkform"
            required
            />
            </div>
          <label className="form-check-label inline text-gray-800" htmlFor="checkform">You agree to providing your data to Taiwo Shina-kelani who may contact you.</label>
        </div>
        <button 
        id="btn__submit"
        type="submit" 
        className="
          w-full
          px-6
          mt-8
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
          onClick={validateForm}>Send</button>
          <input type="hidden" name="_next" value='https://kelani-linktr-ee-v2.netlify.app/thanks'></input>
          <input type="hidden" name="_captcha" value="false"></input>
      </form>
      </div>
</div>
        </div>
        <Footer />
    </>
  )
}

export default Contact