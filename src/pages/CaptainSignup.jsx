import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useCaptainContext } from '../context/captainContext';

const CaptainSignup = () => {
  const [captainData, setCaptainData] = useState({ fullname: { firstname: '', lastname: '' }, email: '', password: '', vehicle: { vehicleColor: '', vehiclePlate: '', vehicleCapacity: '', vehicleType: '' } });

  const { captain, setCaptain } = useCaptainContext();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(captainData);
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, {
      ...captainData,
      vehicle: {
        color: captainData.vehicle.vehicleColor,
        plate: captainData.vehicle.vehiclePlate,
        capacity: captainData.vehicle.vehicleCapacity,
        vehicleType: captainData.vehicle.vehicleType
      }
    });

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }
    setCaptainData({ fullname: { firstname: '', lastname: '' }, email: '', password: '', vehicle: { vehicleColor: '', vehiclePlate: '', vehicleCapacity: '', vehicleType: '' } });
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
              value={captainData.fullname.firstname}
              onChange={(e) => setCaptainData({ ...captainData, fullname: { ...captainData.fullname, firstname: e.target.value } })}
              placeholder='First name'
              required
              className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg placeholder:text-base'
            />
            <input
              type="text"
              value={captainData.fullname.lastname}
              onChange={(e) => setCaptainData({ ...captainData, fullname: { ...captainData.fullname, lastname: e.target.value } })}
              placeholder='Last name'
              className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg placeholder:text-base'
            />
          </div>

          <h3 className='text-lg font-medium mb-2'>What's our captain's email?</h3>
          <input
            type="email"
            value={captainData.email}
            onChange={(e) => setCaptainData({ ...captainData, email: e.target.value })}
            placeholder='example@mail.com'
            required
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            type="password"
            value={captainData.password}
            onChange={(e) => setCaptainData({ ...captainData, password: e.target.value })}
            placeholder='password'
            required
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          />

          <h3 className='text-lg font-medium mb-2'>Vehicle Details</h3>
          <div className='flex gap-4 mb-7'>
            <input
              type="text"
              value={captainData.vehicle.vehicleColor}
              onChange={(e) => setCaptainData({ ...captainData, vehicle: { ...captainData.vehicle, vehicleColor: e.target.value } })}
              placeholder='Vehicle Color'
              required
              className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg placeholder:text-base'
            />

            <input
              type="text"
              value={captainData.vehicle.vehiclePlate}
              onChange={(e) => setCaptainData({ ...captainData, vehicle: { ...captainData.vehicle, vehiclePlate: e.target.value } })}
              placeholder='Vehicle Plate'
              required
              className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg placeholder:text-base'
            />
          </div>

          <div className='flex gap-4 mb-7'>
            <input
              type="number"
              value={captainData.vehicle.vehicleCapacity}
              onChange={(e) => setCaptainData({ ...captainData, vehicle: { ...captainData.vehicle, vehicleCapacity: e.target.value } })}
              placeholder='Vehicle Capacity'
              required
              className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-lg placeholder:text-base'
            />

            <select
              value={captainData.vehicle.vehicleType}
              onChange={(e) => setCaptainData({ ...captainData, vehicle: { ...captainData.vehicle, vehicleType: e.target.value } })}
              required
              className='bg-[#eeeeee] rounded px-4 py-2 w-1/2 text-base placeholder:text-base'
            >
              <option value="" disabled>Select Vehicle</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          <button
            className='bg-[#111] text-white text-lg font-semibold mb-3 rounded px-4 py-2 w-full'
          >
            Create Captain Account
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