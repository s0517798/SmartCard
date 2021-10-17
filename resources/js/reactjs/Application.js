import React from "react";
import { store, persistor } from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import RootScreen from "./RootScreen";

const Application = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RootScreen />
            </PersistGate>
        </Provider>
    );
};

export default Application;
