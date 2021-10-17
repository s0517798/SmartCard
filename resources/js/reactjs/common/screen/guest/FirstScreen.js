import React from "react";
import TopNavbar from "../../../common/layout/menu/TopNavbar";

const FirstScreen = (props) => {
    return (
        <div className="h-full w-full" id="screen__guest__first">
            <TopNavbar />
            {props.children}
        </div>
    );
};

export default FirstScreen;
