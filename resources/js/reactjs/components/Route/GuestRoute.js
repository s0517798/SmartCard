import React from "react";
import { useSelector } from "react-redux";

import { Route } from "react-router-dom";

import { selectIsisLoggingIn } from "../../features/auth/authSlice";

const PrivateRoute = ({ component, ...rest }) => {
    const useAuth = () => {
        let isLoggedIn = useSelector(selectIsLoggedIn);
        return isLoggedIn;
    };

    const isAuth = useAuth();

    return <Route {...rest} component={!isAuth ? component : <></>} />;
};

export default PrivateRoute;
