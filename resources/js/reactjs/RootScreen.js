import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthRoute from "./components/Route/AuthRoute";

import BackgroundMain from "./components/Background/BackgroundMain";
import routes from "./app/routes";

const RootScreen = () => {
    const showRouter = (routes) => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((value, index) => {
                if (value.auth === true) {
                    return (
                        <AuthRoute
                            key={index}
                            path={value.path}
                            exact={value.exact}
                            component={value.main}
                        />
                    );
                } else {
                    return (
                        <Route
                            key={index}
                            path={value.path}
                            exact={value.exact}
                            component={value.main}
                        />
                    );
                }
            });
        }
        return result;
    };
    return (
        <>
            <Router>
                <div
                    className="h-screen w-screen overflow-hidden"
                    id="screen__root"
                >
                    <Switch>
                        {/*  */}
                        {showRouter(routes)}
                    </Switch>
                </div>
            </Router>

            {/* BACKGROUND IMAGE */}
            <BackgroundMain
                id="bg-main"
                className="h-screen w-screen object-cover fixed inset-0 -z-100"
            />
        </>
    );
};

export default RootScreen;
