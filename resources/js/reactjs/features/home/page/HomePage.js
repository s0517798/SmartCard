import React, { useEffect } from "react";
import BottomNavbar from "../../../common/layout/menu/BottomNavbar";
import LogoImage from "../../../components/LogoImage";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchUser, selectError } from "../../profile/profileSlice";
import { fetchAll } from "../../about/AboutSlice";
import FirstScreen from "../../../common/screen/auth/FirstScreen";

const HomePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const error = useSelector(selectError);

    /*
        Effect xu ly fetch data user de tranh truogng hop sau khi login nguoi dung khong vao profile ma vao edit
    */
    useEffect(() => {
        dispatch(fetchUser()).then(() => {
            if (error.code !== null) {
                history.push("/logout");
            }
        });
        dispatch(fetchAll()).then(() => {
            if (error.code !== null) {
                history.push("/logout");
            }
        });
    }, []);

    return (
        <FirstScreen>
            <div className="w-full h-full" id="page__home">
                <div className="w-full h-full flex justify-center items-center px-8">
                    <LogoImage />
                </div>
            </div>
        </FirstScreen>
    );
};

export default HomePage;
