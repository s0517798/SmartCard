import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RepositoryFactory from "../../repository/RepositoryFactory";
import LocalStorageService from "../../app/localStorageService";

const profileRepository = RepositoryFactory.exec("profile");
// const fileRepository = RepositoryFactory.exec("file");

export const fetchUser = createAsyncThunk(
    "profile/user/fetch",
    async (uid, { rejectWithValue }) => {
        try {
            const res = await profileRepository.user(uid);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);

export const putMe = createAsyncThunk(
    "profile/me/update",
    async (data, { rejectWithValue }) => {
        try {
            const res = await profileRepository.putMe(data);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);

export const uploadMyAvatar = createAsyncThunk(
    "profile/avatar/update",
    async (fd, { rejectWithValue }) => {
        try {
            const res = await profileRepository.uploadAvatar(fd);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);

export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        user: null,
        //
        update: {
            updating: false,
            updated: false,
        },
        //
        error: {
            code: null,
            message: null,
        },
    },
    reducers: {
        setImage(state) {
            //
        },
        deleteError(state) {
            state.error.code = null;
            state.error.message = null;
        },

        createSocialLink(state, link) {
            let about = state.user?.about.concat(link);
            state.user.about = about;
        },

        updateSortAbout(state, data) {
            state.user.about = data.payload;
        },
    },
    extraReducers(builder) {
        /* Fetch User */
        builder
            .addCase(fetchUser.pending, (state, action) => {
                state.user = null;
                state.error.code = null;
                state.error.message = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                if (action.payload.success == true) {
                    state.user = action.payload.data;
                } else {
                    state.user = null;
                    state.error.code = action.payload.code;
                    state.error.message = action.payload.message;
                }
            })
            .addCase(fetchUser.rejected, (state, action) => {
                console.error(action.payload);
                state.user = null;
                state.error.code = action.payload.status;
                state.error.message = action.payload?.data.message;
            });
        /* Put Me */
        builder
            .addCase(putMe.pending, (state, action) => {
                state.error.code = null;
                state.error.message = null;
                state.update.updating = true;
                state.update.updated = false;
            })
            .addCase(putMe.fulfilled, (state, action) => {
                if (action.payload.success == true) {
                    state.user = action.payload.data;
                    state.update.updating = false;
                    state.update.updated = true;
                } else {
                    state.error.code = action.payload.code;
                    state.error.message = action.payload.message;
                    state.update.updating = false;
                    state.update.updated = false;
                }
            })
            .addCase(putMe.rejected, (state, action) => {
                console.error(action.payload);
                state.error.message = action.payload?.data.message;
                state.update.updating = false;
                state.update.updated = false;
            });

        /* Upload Avatar */
        builder
            .addCase(uploadMyAvatar.pending, (state, action) => {
                state.error.code = null;
                state.error.message = null;
            })
            .addCase(uploadMyAvatar.fulfilled, (state, action) => {
                if (action.payload.success == true) {
                    state.user.profile_photo_url = action.payload.data.url;
                } else {
                    state.error.code = action.payload.code;
                    state.error.message = action.payload.message;
                }
            })
            .addCase(uploadMyAvatar.rejected, (state, action) => {
                console.error(action.payload);
                state.error.message = action.payload?.data.message;
            });
    },
});
/* Action */
export const profileActions = profileSlice.actions;

/* Selectors */
export const selectUser = (state) => state.profile?.user || null;
export const selectUpdate = (state) => state.profile?.update || null;
export const selectError = (state) => state.profile?.error || null;

/* Reducer */
const profileReducer = profileSlice.reducer;
export default profileReducer;
