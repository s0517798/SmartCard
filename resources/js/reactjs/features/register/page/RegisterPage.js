import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchRegister,
    selectIsRegistered,
    selectMessage,
} from "../../register/registerSlice";

import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ValidateConfig from "../../../utils/validateConfig";
import Message from "../../../utils/message";

import { objectMap } from "../../../utils/object";

import Input from "../../../components/Form/Input";
import { ErrorMessage, SuccessMessage } from "../../../components/Form/Message";
import FirstScreen from "../../../common/screen/guest/FirstScreen";

const Register = () => {
    const dispatch = useDispatch();

    const [tryRegister, setTryRegister] = useState(false);

    let registeredStatus = useSelector(selectIsRegistered);
    let message = useSelector(selectMessage);

    let isArrayMessage = false;
    let arrMessage = [];

    if (typeof message === "object" && message !== null) {
        isArrayMessage = true;
        objectMap(message, (v) => arrMessage.push(v));
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
            name: "",
            uid: "",
        },
        validationSchema: Yup.object({
            email: ValidateConfig.email,
            password: ValidateConfig.password,
            name: ValidateConfig.name,
            uid: ValidateConfig.uid,
        }),
        onSubmit: (values) => {
            setTryRegister(true);
            dispatch(fetchRegister(values));
        },
    });

    return (
        <FirstScreen>
            <div className="h-full flex" id="page__register">
                <div className="h-3/4 fixed inset-x-0 top-1/5 z-0 flex justify-center items-start overflow-auto">
                    <div className="px-4 py-4 bg-gray-500 bg-opacity-90 rounded-lg">
                        <form onSubmit={formik.handleSubmit} className="mb-2">
                            <h2 className="text-3xl text-center text-gray-800 mb-4">
                                Register
                            </h2>
                            <div className="">
                                <div className="mb-2">
                                    <label>
                                        <div>
                                            <h3 className="mb-1 text-xl">
                                                Email :
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
                                <div className="mb-2">
                                    <label>
                                        <div>
                                            <h3 className="mb-1 text-xl">
                                                Password :
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
                                <div className="mb-2">
                                    <label>
                                        <div>
                                            <h3 className="mb-1 text-xl">
                                                Name :{" "}
                                            </h3>
                                            <Input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="px-2 py-2 mb-2"
                                                placeholder="Your Name"
                                                value={formik.values.name}
                                                handleChange={
                                                    formik.handleChange
                                                }
                                            />
                                            {formik.errors.name &&
                                                formik.touched.name && (
                                                    <ErrorMessage
                                                        msg={formik.errors.name}
                                                    />
                                                )}
                                        </div>
                                    </label>
                                </div>
                                <div className="mb-6">
                                    <label>
                                        <div>
                                            <h3 className="mb-1 text-xl">
                                                KIMI Number :{" "}
                                            </h3>
                                            <Input
                                                type="text"
                                                id="uid"
                                                name="uid"
                                                className="px-2 py-2 mb-2"
                                                placeholder="Your KIMI Number"
                                                value={formik.values.uid}
                                                handleChange={
                                                    formik.handleChange
                                                }
                                            />
                                            {formik.errors.uid &&
                                                formik.touched.uid && (
                                                    <ErrorMessage
                                                        msg={formik.errors.uid}
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
                                        Register
                                    </button>
                                </div>
                                {/* MESSAGE */}
                                <div>
                                    {tryRegister === true ? (
                                        registeredStatus === false ? (
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
                                                <ErrorMessage msg={message} />
                                            )
                                        ) : (
                                            <SuccessMessage
                                                msg={Message.register.success()}
                                            />
                                        )
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                {/* END MESSAGE */}
                            </div>
                        </form>
                        <div className="flex justify-end">
                            <NavLink to="/login">
                                <button
                                    type="submit"
                                    className="text-center underline text-black hover:text-gray-900"
                                >
                                    Login ?
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </FirstScreen>
    );
};

export default Register;
