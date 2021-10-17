import React from "react";
import BottomNavbar from "../../layout/menu/BottomNavbar";

const FirstScreen = (props) => {
    return (
        <div className="w-full h-full" id="screen__auth__first">
            {props.children}
            <BottomNavbar />
        </div>
    );
};

export default FirstScreen;
