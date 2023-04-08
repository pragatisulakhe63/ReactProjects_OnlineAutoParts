import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {},
    custData: {},
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signin: (state, action) => {
            state.userData.email = action.payload.userEmail;
            state.userData.passwoed = action.payload.userPasswoed;
        },

        signup: (state, action) => {
            state.userData = action.payload;

        },
        signout: (state, action) => {
            state.userData = null;
        },
        addCust: (state, action)=>{
            state.custData = action.payload;
        },
    },
});

export const { signin, signup, signout, addCust } = authSlice.actions;
export const currUserData = (state) => state.auth.userData;
export const currCustData = (state) => state.auth.custData;
export default authSlice.reducer;
