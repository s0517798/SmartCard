import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { selectIsLoggedIn } from "../../../features/auth/authSlice";

import LogoImage from "../../../components/LogoImage";

const MenuPage = () => {
    const dispatch = useDispatch();

    let useAuth = () => {
        return useSelector(selectIsLoggedIn) ? true : false;
    };
    let isAuth = useAuth();

    return (
        <div className="h-full w-full bg-gray-50 bg-opacity-90" id="page__menu">
            <div className="border-b-2 px-2 py-2 border-gray-700 bg-gray-100">
                <NavLink to="/">
                    <LogoImage className="rounded-full w-10" />
                </NavLink>
            </div>
            <div>
                {isAuth && (
                    <div className="w-full border-b">
                        <NavLink to="/">
                            <BtnMenu text="Home" />
                        </NavLink>
                    </div>
                )}
                {!isAuth && (
                    <div className="w-full border-b">
                        <NavLink to="/register">
                            <BtnMenu text="Register" />
                        </NavLink>
                    </div>
                )}
                {!isAuth && (
                    <div className="w-full border-b">
                        <NavLink to="/login">
                            <BtnMenu text="Login" />
                        </NavLink>
                    </div>
                )}
                {isAuth && (
                    <div className="w-full border-b">
                        <NavLink to="/profile">
                            <BtnMenu text="Profile" />
                        </NavLink>
                    </div>
                )}
                {isAuth && (
                    <div className="w-full border-b">
                        <NavLink to="/logout">
                            <BtnMenu text="Logout" />
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
};

const BtnMenu = ({ text, onClick }) => {
    return (
        <button
            type="button"
            className="w-full text-center px-4 py-2 hover:bg-gray-200 hover:text-green-700 cursor-pointer outline-none"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default MenuPage;
