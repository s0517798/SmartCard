import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import LogoImage from "../../../components/LogoImage";

import MenuPage from "./MenuPage";

const TopNavbar = () => {
    const [visibleMenu, setVisibleMenu] = useState(false);

    const onClickBtnMenu = () => {
        setVisibleMenu(!visibleMenu);
    };

    return (
        <div
            className={`fixed inset-x-0 top-0 ${visibleMenu ? "z-10" : ""}`}
            id="layout__top-navbar"
        >
            {/* NAVBAR */}
            <nav className="text-white flex justify-between items-center px-2 pt-2">
                <div>
                    <NavLink to="/">
                        <LogoImage className="rounded-full w-14" />
                    </NavLink>
                </div>
                <div className="">
                    <div>
                        <button
                            type="button"
                            className="outline-none"
                            onClick={onClickBtnMenu}
                        >
                            <IoIosMenu className="text-5xl" />
                        </button>
                    </div>
                </div>
            </nav>
            {/* END NAVBAR */}
            {/* MENU NAVBAR */}
            <div
                className={`h-screen w-5/6 absolute top-0 left-0 transform transition ease-in-out duration-700 ${
                    !visibleMenu ? "-translate-x-full invisible" : "visible"
                } `}
            >
                <MenuPage />
            </div>
            {/* END MENU NAVBAR */}
        </div>
    );
};

export default TopNavbar;
