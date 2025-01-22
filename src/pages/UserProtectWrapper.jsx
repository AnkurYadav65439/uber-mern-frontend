import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const UserProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    console.log("token ", token);

    useEffect(() => {
        if (!token) {
            navigate('/login');   //not working outside useEffect
        }
    }, [token]);

    return (
        <>
            {children}
        </>
    )
}

export default UserProtectWrapper