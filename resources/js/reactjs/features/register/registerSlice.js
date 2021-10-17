import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RepositoryFactory from "../../repository/RepositoryFactory";
const RegisterRepository = RepositoryFactory.exec("register");

export const fetchRegister = createAsyncThunk(
    "register/fetchRegister",
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await RegisterRepository.register(credentials);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);

export const registerSlice = createSlice({
    name: "register",
    initialState: {
        isRegistering: false,
        isRegistered: false,
        //
        message: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchRegister.pending, (state, action) => {
                state.isRegistering = true;
                state.isRegistered = false;
                state.message = null;
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                if (action.payload.success == true) {
                    state.isRegistering = false;
                    state.isRegistered = true;
                } else {
                    state.isRegistering = false;
                    state.isRegistered = false;
                    state.message = action.payload.message;
                }
            })
            .addCase(fetchRegister.rejected, (state, action) => {
                state.isRegistering = false;
                state.isRegistered = false;
                state.message = action.payload.data.errors;
            });
    },
});
/* Action */
export const registerActions = registerSlice.actions;

/* Selectors */
export const selectIsRegistered = (state) =>
    state.register?.isRegistered || false;

export const selectMessage = (state) => state.register?.message || null;

/* Reducer */
const registerReducer = registerSlice.reducer;
export default registerReducer;
