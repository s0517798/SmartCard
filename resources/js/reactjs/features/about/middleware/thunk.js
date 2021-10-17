import { createAsyncThunk } from "@reduxjs/toolkit";
import RepositoryFactory from "../../../repository/RepositoryFactory";

const aboutRepository = RepositoryFactory.exec("about");

export const fetchAll = createAsyncThunk(
    "about/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const res = await aboutRepository.fetchAll();
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);

export const fetchNoSelect = createAsyncThunk(
    "about/fetchNoSelect",
    async (_, { rejectWithValue }) => {
        try {
            const res = await aboutRepository.fetchNoSelect();
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);

export const postData = createAsyncThunk(
    "about/create",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await aboutRepository.postData(payload);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);

export const putData = createAsyncThunk(
    "about/update",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await aboutRepository.putData(payload.id, payload.data);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);

export const putSortAbout = createAsyncThunk(
    "about/putSortAbout",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await aboutRepository.putSortAbout(payload);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);

export const deleteData = createAsyncThunk(
    "about/deleteItem",
    async (id, { rejectWithValue }) => {
        try {
            const res = await aboutRepository.deleteItem(id);
            return res.data;
        } catch (err) {
            if (!err.response) {
                throw err;
            }
            return rejectWithValue(err.response);
        }
    }
);
