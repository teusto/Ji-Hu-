import React from 'react'
import Loader from './components/Loader';
import BusinessCard from './components/BusinessCard';
import MainWrapper from './components/Main';
import './style.scss';

const App = (): React.JSX.Element => {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <BusinessCard />
                <div className='Video--blur'></div>
                <MainWrapper />
            </div>
        </>
    )
}

export default App;