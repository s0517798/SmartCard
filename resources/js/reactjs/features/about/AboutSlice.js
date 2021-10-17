import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    fetchAll,
    fetchNoSelect,
    postData,
    putData,
    putSortAbout,
    deleteData,
} from "./middleware/thunk";

export { fetchAll, fetchNoSelect, postData, putData, putSortAbout, deleteData };

export const aboutSlice = createSlice({
    name: "about",
    initialState: {
        data: {
            all: null,
            noSelect: null,
            new: null,
            update: null,
        },
        //
        error: {
            code: null,
            message: null,
        },
    },
    reducers: {
        deleteError(state) {
            state.error.code = null;
            state.error.message = null;
        },
    },
    extraReducers(builder) {
        /* Fetch All */
        builder
            .addCase(fetchAll.pending, (state, action) => {
                state.data.all = null;
                state.error.code = null;
                state.error.message = null;
            })
            .addCase(fetchAll.fulfilled, (state, action) => {
                if (action.payload.success == true) {
                    state.data.all = action.payload.data;
                } else {
                    state.data.all = null;
                    state.error.code = action.payload.code;
                    state.error.message = action.payload.message;
                }
            })
            .addCase(fetchAll.rejected, (state, action) => {
                console.error(action.payload);
                state.data.all = null;
                state.error.code = action.payload?.status;
                state.error.message = action.payload?.data.message;
            });

        /* Fetch No Select */
        builder
            .addCase(fetchNoSelect.pending, (state, action) => {
                state.data.noSelect = null;
                state.error.code = null;
                state.error.message = null;
            })
            .addCase(fetchNoSelect.fulfilled, (state, action) => {
                if (action.payload.success == true) {
                    state.data.noSelect = action.payload.data;
                } else {
                    state.data.noSelect = null;
                    state.error.code = action.payload.code;
                    state.error.message = action.payload.message;
                }
            })
            .addCase(fetchNoSelect.rejected, (state, action) => {
                console.error(action.payload);
                state.data.noSelect = null;
                state.error.code = action.payload?.status;
                state.error.message = action.payload?.data.message;
            });

        /* Create */
        builder
            .addCase(postData.pending, (state, action) => {
                state.data.new = null;
                state.error.code = null;
                state.error.message = null;
            })
            .addCase(postData.fulfilled, (state, action) => {
                if (action.payload.success == true) {
                    state.data.new = action.payload.data;
                } else {
                    state.data.new = null;
                    state.error.code = action.payload.code;
                    state.error.message = action.payload.message;
                }
            })
            .addCase(postData.rejected, (state, action) => {
                console.error(action.payload);
                state.data.new = null;
                state.error.code = action.payload?.status;
                state.error.message = action.payload?.data.message;
            });
        /* Update */
        builder
            .addCase(putData.pending, (state, action) => {
                state.data.update = null;
                state.error.code = null;
                state.error.message = null;
            })
            .addCase(putData.fulfilled, (state, action) => {
                if (action.payload.success == true) {
                    state.data.update = action.payload.data;
                } else {
                    state.data.update = null;
                    state.error.code = action.payload.code;
                    state.error.message = action.payload.message;
                }
            })
            .addCase(putData.rejected, (state, action) => {
                console.error(action.payload);
                state.data.update = null;
                state.error.code = action.payload?.status;
                state.error.message = action.payload?.data.message;
            });

        /* Update Sort About*/
        builder
            .addCase(putSortAbout.pending, (state, action) => {
                state.error.code = null;
                state.error.message = null;
            })
            .addCase(putSortAbout.fulfilled, (state, action) => {
                if (action.payload.success == true) {
                    //
                } else {
                    state.error.code = action.payload.code;
                    state.error.message = action.payload.message;
                }
            })
            .addCase(putSortAbout.rejected, (state, action) => {
                console.error(action.payload);
                state.error.code = action.payload?.status;
                state.error.message = action.payload?.data.message;
            });
        // DeleteData
        builder
            .addCase(deleteData.pending, (state, action) => {
                state.error.code = null;
                state.error.message = null;
            })
            .addCase(deleteData.fulfilled, (state, action) => {
                if (action.payload.success == true) {
                    //
                } else {
                    state.error.code = action.payload.code;
                    state.error.message = action.payload.message;
                }
            })
            .addCase(deleteData.rejected, (state, action) => {
                console.error(action.payload);
                state.error.code = action.payload?.status;
                state.error.message = action.payload?.data.message;
            });
    },
});
/* Action */
export const aboutActions = aboutSlice.actions;

/* Selectors */
export const selectData = (state) => state.about?.data;
export const selectError = (state) => state.about?.error || null;

/* Reducer */
const aboutReducer = aboutSlice.reducer;
export default aboutReducer;
