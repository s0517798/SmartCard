import React from "react";

import Logo from "../../../images/logo.png";

const LogoImage = ({ className }) => {
    return (
        <>
            <img className={`${className}`} src={Logo} alt="img-logo" />
        </>
    );
};

export default LogoImage;
