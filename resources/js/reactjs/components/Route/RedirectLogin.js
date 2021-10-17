import React from "react";
import { Redirect } from "react-router-dom";

const RedirectLogin = () => {
    return (
        <>
            <Redirect push to="/login" />
        </>
    );
};

export default RedirectLogin;
