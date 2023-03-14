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
            state.progress = "done";
            state.success = action.payload.success;
            if (state.success === true) {
                setAccessToken(action.payload.result.accessToken);
                state.user.accessToken = action.payload.result.accessToken;
                state.user.userId = action.payload.result.userId;
            } else {
                // state.error.message = action.payload.error.message;
                // state.error.details = action.payload.error.details;
            }
    });
}});

export const { resetProgress } = authSlice.actions;
export default authSlice.reducer;