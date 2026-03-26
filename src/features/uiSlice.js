import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        search: "",
        page: 1,
        hasMore: true
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
        }
    },
});

export const { setSearch, nextPage, stopLoading } = uiSlice.actions;
export default uiSlice.reducer;