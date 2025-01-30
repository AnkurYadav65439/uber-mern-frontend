import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext';

const UserProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { user, setUser } = useUserContext();
    const [ isLoading, setIsLoading] = useState(true);
    console.log("token ", token);

    useEffect(() => {
        if (!token) {
            navigate('/login');   //not working outside useEffect
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 200) {
                setIsLoading(false);
                setUser(response.data.user);
            }
        }).catch((err) => {
            console.log(err);
            localStorage.removeItem('token');
            navigate('/login');
        });
    }, [token, setUser, navigate]);

    return (
        <>
            {children}
        </>
    )
}

export default UserProtectWrapper