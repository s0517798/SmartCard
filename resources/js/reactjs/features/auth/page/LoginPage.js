import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin, selectIsLoggedIn, selectMessage } from "../authSlice";

import { NavLink, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ValidateConfig from "../../../utils/validateConfig";

import { objectMap } from "../../../utils/object";

import Input from "../../../components/Form/Input";
import { ErrorMessage } from "../../../components/Form/Message";
import FirstScreen from "../../../common/screen/guest/FirstScreen";

const LoginPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [tryLoginStatus, setTryLoginStatus] = useState(false);

    let loggedInStatus = useSelector(selectIsLoggedIn);
    let message = useSelector(selectMessage);

    let isArrayMessage = false;
    let arrMessage = [];

    if (typeof message === "object" && message !== null) {
        isArrayMessage = true;
        objectMap(message, (v) => arrMessage.push(v));
    }

    useEffect(() => {
        if (loggedInStatus === true) {
            history.push("/");
        }
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: ValidateConfig.email,
            password: ValidateConfig.password,
        }),
        onSubmit: (values) => {
            setTryLoginStatus(true);
            dispatch(fetchLogin(values));
        },
    });

    return (
        <FirstScreen>
            <div id="page__login" className="h-full w-full">
                <div className="fixed inset-x-0 top-1/4 flex justify-center items-center">
                    <div className="px-4 py-6 bg-gray-500 bg-opacity-90 rounded-lg">
                        <form onSubmit={formik.handleSubmit} className="mb-2">
                            <h2 className="text-3xl text-center text-gray-800 mb-6">
                                Login
                            </h2>
                            <div className="">
                                <div className="mb-4">
                                    <label>
                                        <div>
                                            <h3 className="mb-4 text-xl">
                                                Username :{" "}
                                            </h3>
                                            <Input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="px-2 py-2 mb-2"
                                                placeholder="email@domain.com"
                                                value={formik.values.email}
                                                handleChange={
                                                    formik.handleChange
                                                }
                                            />
                                            {formik.errors.email &&
                                                formik.touched.email && (
                                                    <ErrorMessage
                                                        msg={
                                                            formik.errors.email
                                                        }
                                                    />
                                                )}
                                        </div>
                                    </label>
                                </div>
                                <div className="mb-8">
                                    <label>
                                        <div>
                                            <h3 className="mb-4 text-xl">
                                                Password :{" "}
                                            </h3>
                                            <Input
                                                type="password"
                                                id="password"
                                                name="password"
                                                className="px-2 py-2 mb-2"
                                                placeholder="********"
                                                value={formik.values.password}
                                                handleChange={
                                                    formik.handleChange
                                                }
                                            />
                                            {formik.errors.password &&
                                                formik.touched.password && (
                                                    <ErrorMessage
                                                        msg={
                                                            formik.errors
                                                                .password
                                                        }
                                                    />
                                                )}
                                        </div>
                                    </label>
                                </div>
                                <div className="mb-6">
                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800"
                                    >
                                        Login
                                    </button>
                                </div>
                                {/* MESSAGE */}
                                <div>
                                    {tryLoginStatus === true ? (
                                        loggedInStatus === false ? (
                                            isArrayMessage ? (
                                                arrMessage.map(
                                                    (item, index) => {
                                                        return (
                                                            <ErrorMessage
                                                                key={index}
                                                                className="mb-2"
                                                                msg={item}
                                                            />
                                                        );
                                                    }
                                                )
                                            ) : (
                                                message && (
                                                    <ErrorMessage
                                                        msg={message}
                                                    />
                                                )
                                            )
                                        ) : (
                                            <></>
                                        )
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                {/* END MESSAGE */}
                            </div>
                        </form>
                        <div className="flex justify-end">
                            <NavLink to="/register">
                                <button
                                    type="button"
                                    className="text-center underline text-black hover:text-gray-900"
                                >
                                    Register ?
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </FirstScreen>
    );
};

export default LoginPage;
