import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };
