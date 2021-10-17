import React from "react";

import nightSky from "../../../../images/bg/night-sky.jpeg";

const BackgroundMain = ({ className }) => {
    return (
        <>
            <img className={`${className}`} src={nightSky} alt="" />
        </>
    );
};

export default BackgroundMain;
