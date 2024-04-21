import React, { useEffect, useState } from 'react'
import Loader from './components/Loader';
import BusinessCard from './components/BusinessCard';
import MainWrapper from './components/Main';
import './style.scss';

const App = (): React.JSX.Element => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        // Use setTimeout to update the message after 5000 milliseconds (5 seconds)
        const timeoutId = setTimeout(() => {
          setShowLoader(false);
        }, 5000);
    
        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
      }, []);

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                {showLoader && <Loader />}
                <BusinessCard />
                <div className='Video--blur'></div>
                <MainWrapper />
            </div>
        </>
    )
}

export default App;