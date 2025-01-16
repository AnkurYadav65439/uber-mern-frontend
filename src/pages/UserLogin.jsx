import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/userContext';

const UserLogin = () => {

  const [userData, setUserData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const { user, setUser } = useUserContext();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(userData);

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      console.log("login user : ", user);   //TODO: not working
      navigate('/home');
    }
    
    setUserData({ email: '', password: '' });
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="assets/uber-logo.png" alt="Uber" />

        <form onSubmit={submitHandler}>
          <h3 className='text-lg font-medium mb-2'>What's your email?</h3>
          <input
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            placeholder='example@mail.com'
            required
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            type="password"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
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

        <p className='text-center'>New here? <Link to="/signup" className='text-blue-600'>Create new Account</Link></p>
      </div>

      <div>
        <Link
          to="/captain-login"
          className='bg-[#10b461] flex items-center justify-center text-white text-lg font-semibold mb-5  rounded px-4 py-2 w-full'
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  )
}

export default UserLogin