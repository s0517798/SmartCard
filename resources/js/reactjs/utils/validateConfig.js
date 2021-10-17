import * as Yup from "yup";
import ValidateMessage from "./validateMessage";

const ValidateConfig = {
    email: Yup.string()
        .email(ValidateMessage.email("email"))
        .required(ValidateMessage.required("email")),

    password: Yup.string()
        .min(8, "Minimum 8 characters")
        .max(32, "Maximum 32 characters")
        .required(ValidateMessage.required("password")),

    name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(50, "Maximum 50 characters")
        .required(ValidateMessage.required("name")),

    uid: Yup.string()
        .max(10, "Maximum 10 characters")
        .required(ValidateMessage.required("uid")),

    introduction: Yup.string().max(200, "Maximum 200 characters"),

    phone_number: Yup.string()
        .min(6, "Mininum 6 characters")
        .max(15, "Maximum 15 characters"),

    required: Yup.string()
        .min(1, "Mininum 1 characters")
        .required(ValidateMessage.required("Field")),
};

export default ValidateConfig;
