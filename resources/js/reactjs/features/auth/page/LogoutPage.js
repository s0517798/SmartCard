import React, { useEffect } from "react";
import { fetchLogout, selectIsLoggedIn } from "../../auth/authSlice";
import { useDispatch } from "react-redux";

const LogoutPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLogout()).then(() => location.reload());
    });

    return <div></div>;
};
export default LogoutPage;
