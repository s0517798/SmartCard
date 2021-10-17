import React from "react";
import { NavLink } from "react-router-dom";

/*
Define
    const header = {
        leftBtn: true,
        leftBtnLink: "/",
        leftBtnIcon: <IoIosArrowBack />,
        title: "Test Title",
        rightBtn: true,
        rightBtnLink: "/",
        rightBtnIcon: <IoIosArrowBack />,
    };

After pass with props = header to this component
*/

const SecondScreen = (props) => {
    return (
        <div className="w-full h-full" id="screen__auth__second">
            <div className="w-full h-full bg-white">
                <div className="px-4 bg-gray-100 border-b-2 flex justify-between items-center">
                    <button type="button" className="h-full w-8">
                        {props.header.leftBtn && (
                            <NavLink
                                to={props.header.leftBtnLink}
                                className="h-full w-full text-blue-500 "
                            >
                                {props.header.leftBtnIcon}
                            </NavLink>
                        )}
                    </button>
                    <h2 className="text-center text-xl  text-gray-800 font-medium">
                        {props.header.title}
                    </h2>
                    <button type="button" className="h-full w-8">
                        {props.header.rightBtn && (
                            <NavLink
                                to={props.header.rightBtnLink}
                                className="h-full w-full text-blue-500 "
                            >
                                {props.header.rightBtnIcon}
                            </NavLink>
                        )}
                    </button>
                </div>
                {props.children}
            </div>
        </div>
    );
};

export default SecondScreen;
