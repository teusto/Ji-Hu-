import React from 'react';
import './style.scss';
import VideoBG from "../../../assets/videos/cardscene.mp4"

const MainWrapper = (): React.JSX.Element => {
    return (
        <video autoPlay loop muted className="Main--video">
            <source src={VideoBG} type="video/mp4" />
        </video>
    )
}

export default MainWrapper;