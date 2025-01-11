import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainLogin = () => {
  const [captainData, setCaptainData] = useState({ email: '', password: '' });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(captainData);
    setCaptainData({ email: '', password: '' });
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-2' src="assets/uber-driver-logo.png" alt="Uber" />

        <form onSubmit={submitHandler}>
          <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
          <input
            type="email"
            value={captainData.email}
            onChange={(e) => setCaptainData({ ...captainData, email: e.target.value })}
            placeholder='example@mail.com'
            required
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            type="password"
            value={captainData.password}
            onChange={(e) => setCaptainData({ ...captainData, password: e.target.value })}
            placeholder='password'
            required
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          />

          <button
            className='bg-[#111] text-white text-lg font-semibold mb-2 rounded px-4 py-2 w-full'
          >
            Login
          </button>
        </form>

        <p className='text-center'>Join a fleet? <Link to="/captain-signup" className='text-blue-600'>Register as a Captain</Link></p>
      </div>

      <div>
        <Link
          to="/login"
          className='bg-[#d5622d] flex items-center justify-center text-white text-lg font-semibold mb-5  rounded px-4 py-2 w-full'
        >
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin