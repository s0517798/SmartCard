import React, { useState } from "react";
import { AiOutlineBarChart, AiOutlineMenu } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import MenuPage from "./MenuPage";

const menuLayout = () => {
    const sizeIcon = 25;
    const [visibleMenu, setVisibleMenu] = useState(false);

    const onClickBtnMenu = () => {
        setVisibleMenu(!visibleMenu);
    };

    return (
        <div
            className={`fixed inset-x-0 bottom-0 ${visibleMenu ? "" : ""}`}
            id="layout__bottom-navbar"
        >
            <nav className="bg-gray-50 absolute bottom-0 flex justify-around w-full border-collapse">
                <div className="flex-grow flex justify-center hover:bg-gray-300">
                    <NavLink
                        to="/"
                        className="w-full"
                        exact
                        activeClassName="border-t-4 border-blue-500"
                    >
                        <div className="w-full">
                            <div className="flex justify-center">
                                <AiOutlineBarChart size={sizeIcon} />
                            </div>
                            <h3 className="text-center">Home</h3>
                        </div>
                    </NavLink>
                </div>
                <div className="flex-grow flex justify-center hover:bg-gray-300">
                    <NavLink
                        to="/profile"
                        className="w-full"
                        exact
                        activeClassName="border-t-4 border-blue-500"
                    >
                        <div className="w-full">
                            <div className="flex justify-center">
                                <BiUser size={sizeIcon} />
                            </div>
                            <h3 className="text-center">Profile</h3>
                        </div>
                    </NavLink>
                </div>
                <div className="flex-grow flex justify-center hover:bg-gray-300">
                    <button
                        type="button"
                        className="w-full outline-none"
                        onClick={onClickBtnMenu}
                    >
                        <div className="flex justify-center">
                            <AiOutlineMenu size={sizeIcon} />
                        </div>
                        <h3 className="text-center">Menu</h3>
                    </button>
                </div>
            </nav>
            <div
                className={`h-screen w-5/6 fixed top-0 left-0 transform transition ease-in-out duration-700 ${
                    !visibleMenu
                        ? "-translate-x-full invisible"
                        : "visible z-100"
                } `}
            >
                <MenuPage />
            </div>
        </div>
    );
};

export default menuLayout;
