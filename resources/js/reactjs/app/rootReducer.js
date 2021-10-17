import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import registerReducer from "../features/register/registerSlice";
import authReducer from "../features/auth/authSlice";
import profileReducer from "../features/profile/profileSlice";
import aboutReducer from "../features/about/AboutSlice";

const rootPersistConfig = {
    key: "root",
    storage: storage,
    stateReconciler: autoMergeLevel2,
    blacklist: ["register", "auth", "profile", "socialNetwork"],
};

const authPersistConfig = {
    key: "auth",
    storage: storage,
    stateReconciler: autoMergeLevel2,
    // blacklist: ["tryLogin", "isLoggingIn"],
    whitelist: ["isLoggedIn", "isRegistered", "token"],
};

const registerPersistConfig = {
    key: "register",
    storage: storage,
    stateReconciler: autoMergeLevel2,
};

const profilePersistConfig = {
    key: "profile",
    storage: storage,
    stateReconciler: autoMergeLevel2,
};

const aboutPersistConfig = {
    key: "about",
    storage: storage,
    stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    register: persistReducer(registerPersistConfig, registerReducer),
    profile: persistReducer(profilePersistConfig, profileReducer),
    about: persistReducer(aboutPersistConfig, aboutReducer),
});

export default persistReducer(rootPersistConfig, rootReducer);
