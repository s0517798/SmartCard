import React from "react";
import { useSelector } from "react-redux";

import { Route } from "react-router-dom";

import RedirectLogin from "./RedirectLogin";

import { selectIsLoggedIn } from "../../features/auth/authSlice";

const AuthRoute = ({ component, ...rest }) => {
    const useAuth = () => {
        let isLoggedIn = useSelector(selectIsLoggedIn);
        return isLoggedIn;
    };

    let isAuth = useAuth();

    return (
        <>
            <Route {...rest} component={isAuth ? component : RedirectLogin} />
        </>
    );
};

export default AuthRoute;
