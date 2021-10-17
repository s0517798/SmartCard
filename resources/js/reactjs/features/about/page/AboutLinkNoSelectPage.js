import React, { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import SecondScreen from "../../../common/screen/auth/SecondScreen";
import { useDispatch, useSelector } from "react-redux";
import { fetchNoSelect, selectData } from "../AboutSlice";
import { NavLink } from "react-router-dom";

const AboutLinkNoSelectPage = () => {
    const header = {
        leftBtn: true,
        leftBtnLink: "/about",
        leftBtnIcon: <IoIosArrowBack />,
        title: "Select Item",
        rightBtn: false,
        rightBtnLink: null,
        rightBtnIcon: null,
    };

    const dispatch = useDispatch();
    const data = useSelector(selectData);

    useEffect(() => {
        dispatch(fetchNoSelect());
    }, []);

    return (
        <SecondScreen header={header}>
            <div className="flex flex-wrap justify-start h-full pb-8 overflow-auto">
                {data?.noSelect?.map((item, index) => {
                    return (
                        <div key={index} className="w-1/3 p-6">
                            <div className="aspect-w-1 aspect-h-1">
                                <NavLink
                                    to={`/about/create?id=${item.id}`}
                                    className="box-border border-2 border-gray-500 rounded-lg flex justify-center items-center p-1 shadow-lg ring-1 bg-gray-50 hover:bg-gray-100 transform hover:scale-105"
                                >
                                    <img
                                        src={item?.path_icon_svg}
                                        className=""
                                    />
                                    <h4 className="text-center font-medium text-green-800 capitalize absolute inset-x-0 bottom-0 bg-opacity-30 transform translate-y-full">
                                        {item?.name}
                                    </h4>
                                </NavLink>
                            </div>
                        </div>
                    );
                })}
            </div>
        </SecondScreen>
    );
};
export default AboutLinkNoSelectPage;
