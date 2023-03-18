import { createSlice } from "@reduxjs/toolkit";
import { setAccessToken } from "../../../utils/localStorageService";
import { AuthenticateAction } from "../../actions/auth";
import { IAuthState } from "../../interface/auth";

const initialState:IAuthState = {
    progress: '',
    user: {
        userId: 0,
        accessToken: ''
    },
    success: false
    
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        resetProgress(state) {
            state.progress = '';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(AuthenticateAction.pending, (state, action) => {
            state.progress = 'pending';
        });
        builder.addCase(AuthenticateAction.fulfilled, (state, action) => {
      
    });
}});

export const { resetProgress } = authSlice.actions;
export default authSlice.reducer;