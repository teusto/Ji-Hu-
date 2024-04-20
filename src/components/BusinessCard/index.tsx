import React from 'react';
import './style.scss';
import { Tilt } from '@jdion/tilt-react';


const BusinessCard = (): React.JSX.Element => {
    return (
        <Tilt className='BusinessCard__wrapper'>
            <div className='BusinessCard__container'>
                <div className='top'>
                    <p className='tel'>+351 932 209 245</p>
                    <div>
                        <p className='link'>Github Account</p>
                        <p className='link'>LinkedIn</p>
                    </div>
                </div>
                <div className='mid'>
                    <div>
                        <p className='name'>Matheus <span>Toscano</span></p>
                        <p className='role'>Software Engineer & Blockchain Developer</p>
                    </div>
                </div>
                <div className='bottom'>
                    <p className='address'>Lisboa, Portugal 2024™️ - pteutoscano@gmail.com<br/> <span>to see more ...</span></p>
                </div>
            </div>
        </Tilt>
    )
}

export default BusinessCard;