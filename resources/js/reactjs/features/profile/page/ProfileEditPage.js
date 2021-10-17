import React, { useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import BottomNavbar from "../../../common/layout/menu/BottomNavbar";
import {
    putMe,
    uploadMyAvatar,
    selectUser,
    selectUpdate,
    selectError,
} from "../profileSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import ValidateConfig from "../../../utils/validateConfig";
import { ErrorMessage, SuccessMessage } from "../../../components/Form/Message";
import Input from "../../../components/Form/Input";
import { IoIosArrowBack } from "react-icons/io";
import SecondScreen from "../../../common/screen/auth/SecondScreen";
import { postChangePassword } from "../../auth/authSlice";

const ProfileEditPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const profileData = useSelector(selectUser);
    const updateState = useSelector(selectUpdate);
    const error = useSelector(selectError);
    const [tryUpdate, setTryUpdate] = useState(false);
    const [hoverAvatar, setHoverAvatar] = useState(false);

    const formikUser = useFormik({
        initialValues: {
            name: profileData?.name || "",
            introduction: profileData?.introduction || "",
            email: profileData?.email || "",
            phone_number: profileData?.phone_number || "",
        },
        validationSchema: Yup.object({
            name: ValidateConfig.name,
            introduction: ValidateConfig.introduction,
            email: ValidateConfig.email,
            phone_number: ValidateConfig.phone_number,
        }),
        onSubmit: (values) => {
            setTryUpdate(true);
            dispatch(putMe(values));
        },
    });

    const formikPassword = useFormik({
        initialValues: {
            current_password: "",
            password: "",
        },
        validationSchema: Yup.object({
            current_password: ValidateConfig.password,
            password: ValidateConfig.password,
        }),
        onSubmit: (values) => {
            dispatch(postChangePassword(values));
        },
    });

    const fileSelectedHandler = (event) => {
        const fd = new FormData();
        fd.append("file", event.target.files[0], event.target.files[0].name);
        dispatch(uploadMyAvatar(fd));
    };

    const header = {
        leftBtn: true,
        leftBtnLink: "/profile",
        leftBtnIcon: <IoIosArrowBack />,
        title: "Edit Profile",
        rightBtn: false,
        rightBtnLink: null,
        rightBtnIcon: null,
    };

    return (
        <SecondScreen header={header}>
            <div className="mt-4 h-full overflow-auto pb-8" id="page__profile">
                {/* UPLOAD AVATAR */}
                <div className="mb-8 flex justify-center">
                    <div
                        className="w-32 mb-4 rounded-full overflow-hidden relative"
                        onMouseOver={() => {
                            setHoverAvatar(true);
                        }}
                        onMouseLeave={() => {
                            setHoverAvatar(false);
                        }}
                    >
                        <div className="aspect-w-1 aspect-h-1">
                            {/* BUTTON UPLOAD IMAGE */}
                            {hoverAvatar && (
                                <div className="flex justify-center items-center absolute inset-x-0 top-0 h-1/2 z-10">
                                    <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer bg-gray-500 bg-opacity-50 hover:bg-gray-600 hover:bg-opacity-50  hover:text-white">
                                        <svg
                                            className="w-8 h-8"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                        </svg>
                                        <input
                                            type="file"
                                            className="hidden"
                                            value={
                                                profileData?.user
                                                    ?.profile_photo_url
                                            }
                                            onChange={fileSelectedHandler}
                                        />
                                    </label>
                                </div>
                            )}
                            {/* END BUTTON UPLOAD IMAGE */}
                            <img
                                src={profileData?.profile_photo_url}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
                {/* END UPLOAD AVATAR */}
                {/* UPDATE USER INFORMATION */}
                <div className="bg-gray-300 px-6 py-4 mb-4">
                    <form onSubmit={formikUser.handleSubmit}>
                        <div className="mb-4">
                            <label className="">
                                <span className="block mb-2">Name:</span>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="px-4 py-1"
                                    placeholder="Your Name"
                                    value={formikUser.values.name}
                                    handleChange={formikUser.handleChange}
                                />
                                {formikUser.errors.name &&
                                    formikUser.touched.name && (
                                        <ErrorMessage
                                            msg={formikUser.errors.name}
                                        />
                                    )}
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="">
                                <span className="block mb-2">
                                    Introduction:
                                </span>
                                <Input
                                    type="text"
                                    id="introduction"
                                    name="introduction"
                                    className="px-4 py-1"
                                    placeholder="Your Introduction"
                                    value={formikUser.values.introduction}
                                    handleChange={formikUser.handleChange}
                                />
                                {formikUser.errors.introduction &&
                                    formikUser.touched.introduction && (
                                        <ErrorMessage
                                            msg={formikUser.errors.introduction}
                                        />
                                    )}
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="">
                                <span className="block mb-2">Email:</span>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="px-4 py-1"
                                    placeholder="email@domain.com"
                                    value={formikUser.values.email}
                                    handleChange={formikUser.handleChange}
                                />
                                {formikUser.errors.email &&
                                    formikUser.touched.email && (
                                        <ErrorMessage
                                            msg={formikUser.errors.email}
                                        />
                                    )}
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="">
                                <span className="block mb-2">
                                    Phone Number:
                                </span>
                                <Input
                                    type="text"
                                    id="phone_number"
                                    name="phone_number"
                                    className="px-4 py-1"
                                    placeholder="Your Phone Number"
                                    value={formikUser.values.phone_number}
                                    handleChange={formikUser.handleChange}
                                />
                                {formikUser.errors.phone_number &&
                                    formikUser.touched.phone_number && (
                                        <ErrorMessage
                                            msg={formikUser.errors.phone_number}
                                        />
                                    )}
                            </label>
                        </div>

                        <div className="flex justify-center mb-4">
                            <button
                                type="submit"
                                className="px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800"
                            >
                                Save
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-1/2 flex justify-center">
                                {tryUpdate == true ? (
                                    updateState.updated == true ? (
                                        <SuccessMessage
                                            className="w-full text-center"
                                            msg="Updated"
                                        />
                                    ) : (
                                        <ErrorMessage msg={error.message} />
                                    )
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
                {/* END UPDATE USER INFORMATION */}
                {/* UPDATE PASSWORD */}
                <div className="bg-gray-300 px-6 py-4">
                    <form onSubmit={formikPassword.handleSubmit}>
                        <div className="mb-4">
                            <h3 className="text-center text-green-700 text-xl">
                                Change Your Password
                            </h3>
                        </div>
                        <div className="mb-4">
                            <label className="">
                                <span className="block mb-2">
                                    Old Password:
                                </span>
                                <Input
                                    type="password"
                                    id="current_password"
                                    name="current_password"
                                    className="px-4 py-1 mb-2"
                                    placeholder="Your Old Password"
                                    value={
                                        formikPassword.values.current_password
                                    }
                                    handleChange={formikPassword.handleChange}
                                />
                                {formikPassword.errors.current_password &&
                                    formikPassword.touched.current_password && (
                                        <ErrorMessage
                                            msg={
                                                formikPassword.errors
                                                    .current_password
                                            }
                                        />
                                    )}
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="">
                                <span className="block mb-2">
                                    New Password:
                                </span>
                                <Input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="px-4 py-1 mb-2"
                                    placeholder="Your New Password"
                                    value={formikPassword.values.password}
                                    handleChange={formikPassword.handleChange}
                                />
                                {formikPassword.errors.password &&
                                    formikPassword.touched.password && (
                                        <ErrorMessage
                                            msg={formikPassword.errors.password}
                                        />
                                    )}
                            </label>
                        </div>
                        <div>
                            <div className="flex justify-center items-center">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded-lg"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* END UPDATE PASSWORD */}
            </div>
        </SecondScreen>
    );
};

export default ProfileEditPage;
