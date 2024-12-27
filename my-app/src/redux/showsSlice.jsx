import { createSlice } from '@reduxjs/toolkit';

const ShowsSlice = createSlice({
    name: "showslice",
    initialState:{
        showData: [],
        showLoading: true,
        showError: false,
    },
    reducers:{
        showsLoading: (state) => {
            state.showError = false;
            state.showLoading = true;
        },
        showsError: (state) => {
            state.showError = true;
            state.showLoading = false;
        },
        gettingShowsData: (state, action) => {
            state.showError = false;
            state.showLoading = false;
            state.showData = action.payload;
        }
    }
});

export default ShowsSlice;