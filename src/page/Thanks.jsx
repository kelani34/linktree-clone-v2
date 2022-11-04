import React from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

function Thanks() {
  return (
    <>
    <div className='bg-slate-200 h-screen'>
    <div className='flex justify-center align-center w-full h-50'>
        <div className='bg-slate-400 w-6/12 p-6 text-center'>
        <h1 className='text-2xl font-bold p-6'>Thank you!</h1>
        <p>Your response has been sent to <u className='text-blue-500 hover:text-blue-200 cursor:pointer'>kelanitaiwo34@gmail.com</u></p>
        </div>
        <Link to='/'> Go back</Link>
        </div>

        </div>
    </>
  )
}

export default Thanks