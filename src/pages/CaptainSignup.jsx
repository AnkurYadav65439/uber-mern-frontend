import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainSignup = () => {
  const [userData, setUserData] = useState({ fullName: { firstName: '', lastName: '' }, email: '', password: '' });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userData);
    setUserData({ fullName: { firstName: '', lastName: '' }, email: '', password: '' });
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-2' src="assets/uber-driver-logo.png" alt="Uber" />

        <form onSubmit={submitHandler}>
          <h3 className='text-lg font-medium mb-2'>What's our captain's name?</h3>
          <div className='flex gap-2 mb-6'>
            <input
              type="text"
              value={userData.fullName.firstName}
              onChange={(e) => setUserData({ ...userData, fullName: { ...userData.fullName, firstName: e.target.value } })}
              placeholder='First name'
              required
              className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg placeholder:text-base'
            />
            <input
              type="text"
              value={userData.fullName.lastName}
              onChange={(e) => setUserData({ ...userData, fullName: { ...userData.fullName, lastName: e.target.value } })}
              placeholder='Last name'
              className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg placeholder:text-base'
            />
          </div>

          <h3 className='text-lg font-medium mb-2'>What's our captain's email?</h3>
          <input
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            placeholder='example@mail.com'
            required
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            type="password"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            placeholder='password'
            required
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          />

          <button
            className='bg-[#111] text-white text-lg font-semibold mb-2 rounded px-4 py-2 w-full'
          >
            Signup
          </button>
        </form>

        <p className='text-center'>Already have an account? <Link to="/captain-login" className='text-blue-600'>Login here</Link></p>
      </div>

      <div>
        <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default CaptainSignup