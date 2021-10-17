import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useQuery } from "../../../utils/router";
import { useDispatch, useSelector } from "react-redux";
import { putData, deleteData, selectData } from "../AboutSlice";
import { selectUser } from "../../profile/profileSlice";
import Input from "../../../components/Form/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import ValidateConfig from "../../../utils/validateConfig";
import { ErrorMessage } from "../../../components/Form/Message";
import { useHistory } from "react-router-dom";
import SecondScreen from "../../../common/screen/auth/SecondScreen";
import "./styles.css";
import { BsFillTrashFill } from "react-icons/bs";

const AboutLinkEditPage = () => {
    let query = useQuery();
    let id = query.get("id");
    let type = query.get("type");

    const header = {
        leftBtn: true,
        leftBtnLink: "/about",
        leftBtnIcon: <IoIosArrowBack />,
        title: "Select Social Item",
        rightBtn: false,
        rightBtnLink: null,
        rightBtnIcon: null,
    };

    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    let socialLink;
    user.about.map((item) => {
        if (item.id == id) {
            socialLink = item;
        }
    });

    const formik = useFormik({
        initialValues: {
            id: id,
            show_button_text: socialLink.show_button_text,
            button_text: socialLink.button_text ? socialLink.button_text : "",
            value: socialLink.value ? socialLink.value : "",
        },
        validationSchema: Yup.object({
            button_text: ValidateConfig.required,
            value: ValidateConfig.required,
        }),
        onSubmit: (values) => {
            let bodyData = {
                id: values.id,
                data: {
                    social_network_id: "Required",
                    show_button_text: values.show_button_text,
                    button_text: values.button_text,
                    value: values.value,
                },
            };
            dispatch(putData(bodyData)).then(() => {
                history.push("/profile");
            });
        },
    });

    const deleteItem = () => {
        dispatch(deleteData(id)).then(() => {
            history.push("/profile");
        });
    };

    return (
        <SecondScreen header={header}>
            <div className="h-full w-full bg-gray-200 px-4 pt-4">
                <div className="flex justify-center items-center bg-white p-4 mb-4 shadow-lg rounded">
                    <img src={socialLink.path_icon_svg} className="w-10" />
                </div>
                <div>
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
                                        defaultChecked={
                                            formik.values.show_button_text
                                                ? true
                                                : false
                                        }
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
                                <h3>{socialLink.placeholder} :</h3>
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
            <div className="fixed bottom-2 right-2">
                <button
                    type="button"
                    className="bg-red-500 text-yellow-400 px-4 py-2 rounded hover:bg-red-700 hover:text-yellow-200 transform hover:scale-110"
                    onClick={deleteItem}
                >
                    <BsFillTrashFill />
                </button>
            </div>
        </SecondScreen>
    );
};
export default AboutLinkEditPage;
