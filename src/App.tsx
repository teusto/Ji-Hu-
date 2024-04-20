import React from 'react'
import Loader from './components/Loader';
import BusinessCard from './components/BusinessCard';
import MainWrapper from './components/Main';

const App = (): React.JSX.Element => {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <BusinessCard />
                <MainWrapper />
            </div>
        </>
    )
}

export default App;