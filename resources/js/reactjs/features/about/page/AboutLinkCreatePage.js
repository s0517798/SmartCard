import React, { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import SecondScreen from "../../../common/screen/auth/SecondScreen";
import { useDispatch, useSelector } from "react-redux";
import { postData, selectData } from "../AboutSlice";
import { useQuery } from "../../../utils/router";
import Input from "../../../components/Form/Input";
import { useFormik, Field } from "formik";
import * as Yup from "yup";
import ValidateConfig from "../../../utils/validateConfig";
import { ErrorMessage } from "../../../components/Form/Message";
import { useHistory } from "react-router-dom";

import "./styles.css";

const AboutLinkCreatePage = () => {
    const header = {
        leftBtn: true,
        leftBtnLink: "/about",
        leftBtnIcon: <IoIosArrowBack />,
        title: "Add Social Network",
        rightBtn: false,
        rightBtnLink: null,
        rightBtnIcon: null,
    };

    let query = useQuery();
    let id = query.get("id");

    const history = useHistory();
    const dispatch = useDispatch();
    const data = useSelector(selectData);

    let newSocialNetwork;
    data.all.map((item) => {
        if (item.id == id) {
            newSocialNetwork = item;
        }
    });

    const formik = useFormik({
        initialValues: {
            social_network_id: id,
            show_button_text: false,
            button_text: newSocialNetwork.name,
            value: "",
        },
        validationSchema: Yup.object({
            button_text: ValidateConfig.required,
            value: ValidateConfig.required,
        }),
        onSubmit: (values) => {
            dispatch(postData(values)).then(() => {
                history.push("/profile");
            });
        },
    });

    return (
        <SecondScreen header={header}>
            <div className="h-full w-full bg-gray-300 px-4 pt-4">
                <div className="flex justify-center items-center bg-white p-4 mb-4 shadow-lg rounded">
                    <img
                        src={newSocialNetwork.path_icon_svg}
                        className="w-10"
                    />
                </div>
                <div className="bg-gray-200 p-4 mb-4 shadow-lg rounded">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-2">
                            <label className="flex items-center cursor-pointer">
                                <div className="mr-3 text-gray-700 font-medium">
                                    Show Button With Text:
                                </div>
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        name="show_button_text"
                                        className="sr-only"
                                        value={formik.values.show_button_text}
                                        onChange={() => {
                                            formik.values.show_button_text =
                                                !formik.values.show_button_text;
                                        }}
                                    />
                                    <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                    <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                </div>
                            </label>
                        </div>

                        <div className="mb-4">
                            <label>
                                <Input
                                    type="text"
                                    name="button_text"
                                    className="px-2 py-1 mb-2"
                                    placeholder="Fill button text"
                                    value={formik.values.button_text}
                                    handleChange={formik.handleChange}
                                />
                                {formik.errors.button_text &&
                                    formik.touched.button_text && (
                                        <ErrorMessage
                                            msg={formik.errors.button_text}
                                        />
                                    )}
                            </label>
                        </div>

                        <div className="mb-4">
                            <label>
                                <h3>{newSocialNetwork.placeholder} :</h3>
                                <Input
                                    type="text"
                                    name="value"
                                    className="px-2 py-1 mb-2"
                                    placeholder="Fill here"
                                    value={formik.values.value}
                                    handleChange={formik.handleChange}
                                />
                                {formik.errors.value &&
                                    formik.touched.value && (
                                        <ErrorMessage
                                            msg={formik.errors.value}
                                        />
                                    )}
                            </label>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-400 text-gray-800 hover:text-gray-700"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </SecondScreen>
    );
};
export default AboutLinkCreatePage;
