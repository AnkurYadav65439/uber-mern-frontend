import { createContext, useContext, useState } from 'react';

const CaptainContext = createContext();

export const CaptainProvider = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    };


    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain
    }

    return (
        <CaptainContext.Provider value={value}>
            {children}
        </CaptainContext.Provider>
    );
};

//custome hook
export const useCaptainContext = () => useContext(CaptainContext);