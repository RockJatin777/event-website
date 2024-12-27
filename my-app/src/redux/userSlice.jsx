import { createSlice } from '@reduxjs/toolkit';

const UserSilce = createSlice({
    name: "userslice",
    initialState: {
        email: "",
        password: "",
        confirmPaswrd: "",
        isErr: false,
        errMsg: "",
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setConfirmPaswrd: (state, action) => {
            state.confirmPaswrd = action.payload;
        },
        setError: (state, action) => {
            state.errMsg = action.payload;
            state.isErr = true;
        }
    }
});

export default UserSilce;