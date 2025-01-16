import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-[url("./assets/traffic-uber.jpg")] bg-cover bg-center h-screen pt-8 flex flex-col justify-between w-full'>
        <img className="w-16 ml-8" src="assets/uber-logo.png" alt="Uber" />
        <div className='bg-white pb-7 px-4 py-4'>
          <h2 className='text-[30px] font-bold'>Get Started with Uber</h2>
          <Link to="/login" className='flex items-center justify-center w-full bg-black text-white py-3 mt-5 rounded-md'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start