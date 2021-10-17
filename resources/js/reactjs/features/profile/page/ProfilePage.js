import React from "react";
import "./styles.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams, useLocation, useHistory } from "react-router-dom";
import { useQuery } from "../../../utils/router";
import BottomNavbar from "../../../common/layout/menu/BottomNavbar";
import {
    fetchUser,
    profileActions,
    selectUser,
    selectError,
} from "../profileSlice";
import { AiOutlineEdit } from "react-icons/ai";
import { BiLink, BiMailSend, BiPhoneCall } from "react-icons/bi";
import { BsBoxArrowRight } from "react-icons/bs";
import FirstScreen from "../../../common/screen/auth/FirstScreen";
import { selectIsLoggedIn } from "../../auth/authSlice";

const iconSize = 30;

const ProfilePage = () => {
    let query = useQuery();
    let uid = query.get("uid");

    const dispatch = useDispatch();
    const history = useHistory();

    const profileData = useSelector(selectUser);
    const error = useSelector(selectError);
    const isLoggedIn = useSelector(selectIsLoggedIn);

    /*
        Effect nay xu ly khi ma response tra ve 404 - User not found
    */
    useEffect(() => {
        if (error.code === 404) {
            dispatch(profileActions.deleteError());
            history.push("/404");
        }
    }, [error]);

    /*
        Effect nay xu ly sau khi mounted se fetch data
        Effect nay cung duoc lam tuong tu tai home page de tranh truong hop sau khi login xong, nguoi dung khong vao profile ma truy cap vao edit
    */
    useEffect(() => {
        dispatch(fetchUser(uid)).then(() => {
            if (error.code !== null) {
                history.push("/logout");
            }
        });
    }, [error]);

    return (
        <FirstScreen>
            <div className="w-full h-full" id="page__profile">
                <div className="px-6 pt-24 z-10">
                    <div className=" relative bg-white rounded-sm px-4 pt-16 pb-4 ">
                        <div className="absolute inset-x-0 top-0 transform -translate-y-1/2">
                            <div className="flex justify-center items-center">
                                <div className="rounded-full w-32 overflow-hidden">
                                    <div className="aspect-w-1 aspect-h-1">
                                        <img
                                            src={profileData?.profile_photo_url}
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                            {isLoggedIn && (
                                <div className="px-2">
                                    <div className="flex justify-end transform -translate-y-full">
                                        <NavLink
                                            to="/profile/edit"
                                            className="flex justify-between items-center px-2 w-20 border-2 rounded shadow-lg border-blue-500 text-blue-500 bg-gray-50 hover:bg-gray-200 hover:text-blue-700"
                                        >
                                            <span>
                                                <AiOutlineEdit />
                                            </span>
                                            <span>Edit</span>
                                        </NavLink>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="">
                            <div className="mb-4">
                                <h2 className="text-center capitalize text-xl font-semibold">
                                    {profileData?.name}
                                </h2>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-center text-gray-500">
                                    {profileData?.introduction}
                                </h3>
                            </div>
                            <div className="flex justify-center">
                                <div className="w-1/3 flex justify-between">
                                    <div>
                                        {profileData?.email && (
                                            <a
                                                target="_blank"
                                                href={`mailto:${profileData?.email}`}
                                                className="text-gray-600 hover:text-gray-400"
                                            >
                                                <BiMailSend size={iconSize} />
                                            </a>
                                        )}
                                    </div>
                                    <div>
                                        {profileData?.phone_number && (
                                            <a
                                                target="_blank"
                                                href={`tel:${profileData?.phone_number}`}
                                                className="text-gray-600 hover:text-gray-400"
                                            >
                                                <BiPhoneCall size={iconSize} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-4" />
                        {/* MAIN */}
                        <div className="box-link overflow-auto">
                            {profileData?.about.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        id={`social__${item.name}`}
                                        className="px-4 py-2 bg-gray-50 border rounded shadow-lg mb-4 hover:bg-gray-100 hover:text-green-800"
                                    >
                                        <a
                                            target="_blank"
                                            href={`${item.href}${item.value}`}
                                            className="flex justify-between items-center"
                                        >
                                            {item.path_icon_svg && (
                                                <div>
                                                    <img
                                                        src={item.path_icon_svg}
                                                        className="w-8 h-auto"
                                                    />
                                                </div>
                                            )}
                                            <div className="">
                                                <h3 className="">
                                                    {item.show_button_text ==
                                                    true
                                                        ? item.button_text
                                                        : item.value}
                                                </h3>
                                            </div>
                                            <div>
                                                <BsBoxArrowRight />
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                        {/* END MAIN */}
                    </div>
                </div>
                {isLoggedIn && (
                    <div className="fixed right-1 bottom-14">
                        <NavLink
                            to="/about"
                            className="flex justify-between items-center  rounded px-2 w-24 bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-50"
                        >
                            <span>
                                <BiLink />
                            </span>
                            <span>Edit Link</span>
                        </NavLink>
                    </div>
                )}
            </div>
        </FirstScreen>
    );
};

export default ProfilePage;
