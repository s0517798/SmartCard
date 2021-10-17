import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RepositoryFactory from "../../repository/RepositoryFactory";
const AuthRepository = RepositoryFactory.exec("auth");

import LocalStorageService from "../../app/localStorageService";

export const fetchLogin = createAsyncThunk(
    "auth/fetchLogin",
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await AuthRepository.login(credentials);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);

export const fetchLogout = createAsyncThunk(
    "auth/fetchLogout",
    async (_, { rejectWithValue }) => {
        try {
            const res = await AuthRepository.logout();
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);

export const postChangePassword = createAsyncThunk(
    "auth/change-password",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await AuthRepository.changePasswords(payload);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);

const deleteLocalStorage = () => {
    LocalStorageService.deleteToken();
    LocalStorageService.deletePersistAuth();
    LocalStorageService.deletePersistProfile();
};

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggingIn: false,
        isLoggedIn: false,
        //
        message: null,
        //
        token: null,
    },
    reducers: {
        logout(state) {
            state.isLoggingIn = false;
            state.isLoggedIn = false;
            state.token = null;
            LocalStorageService.deleteToken();
        },
    },
    extraReducers(builder) {
        /* Fetch Login */
        builder
            .addCase(fetchLogin.pending, (state, action) => {
                state.isLoggingIn = true;
                state.isLoggedIn = false;
                state.message = null;
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                if (action.payload.success == true) {
                    state.isLoggingIn = false;
                    state.isLoggedIn = true;
                    state.token = action.payload.data.token;
                    localStorage.setItem("token", action.payload.data.token);
                } else {
                    state.isLoggingIn = false;
                    state.isLoggedIn = false;
                    state.message = action.payload.message;
                }
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.isLoggingIn = false;
                state.isLoggedIn = false;
                state.message = action.payload?.data.errors;
            });
        /* Fetch Logout */
        builder
            .addCase(fetchLogout.pending, (state, action) => {
                state.isLoggingIn = true;
                state.isLoggedIn = true;
                state.message = null;
            })
            .addCase(fetchLogout.fulfilled, (state, action) => {
                if (action.payload.success == true) {
                    state.isLoggingIn = false;
                    state.isLoggedIn = false;
                    state.token = null;
                    deleteLocalStorage();
                } else {
                    state.isLoggingIn = false;
                    state.isLoggedIn = true;
                    state.message = action.payload.message;
                }
            })
            .addCase(fetchLogout.rejected, (state, action) => {
                state.isLoggingIn = false;
                state.isLoggedIn = false;
                state.message = action.payload;
                deleteLocalStorage();
            });

        /* Change Password */
        builder
        .addCase(postChangePassword.pending, (state, action) => {
            state.isLoggedIn = true;
            state.message = null;
        })
        .addCase(postChangePassword.fulfilled, (state, action) => {
            if (action.payload.success == true) {
                state.isLoggedIn = false;
                state.token = null;
                deleteLocalStorage();
            } else {
                state.message = action.payload.message;
            }
        })
        .addCase(postChangePassword.rejected, (state, action) => {
            state.message = action.payload;
            deleteLocalStorage();
        });
    },
});
/* Action */
export const authActions = authSlice.actions;

/* Selectors */
export const selectStateAuth = (state) => state.auth;
export const selectIsisLoggingIn = (state) => state.auth.isLoggingIn;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectToken = (state) => state.auth.token;

export const selectMessage = (state) => state.auth.message;

/* Reducer */
const authReducer = authSlice.reducer;
export default authReducer;
