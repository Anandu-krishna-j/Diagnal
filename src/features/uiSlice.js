import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        search: "",
        page: 1,
        hasMore: true,
        totalItems: 0,
    },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        nextPage: (state) => {
            if (state.hasMore) {
                state.page += 1;
            }
        },
        stopLoading: (state) => {
            state.hasMore = false;
        },
        resetPagination: (state) => {
            state.page = 1;
            state.hasMore = true;
            state.totalItems = 0;
        },
        setTotalItems: (state, action) => {
            state.totalItems = action.payload;
        },
    },
});

export const { setSearch, nextPage, stopLoading, resetPagination, setTotalItems } = uiSlice.actions;
export default uiSlice.reducer;