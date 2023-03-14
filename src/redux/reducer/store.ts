import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authReducer from "./auth/authReducer";
import ProjectReducer from "./project/ProjectReducer";
import taskReducer from "./task/taskReducer";

const reducer = { 
    auth: authReducer,
    task: taskReducer,
    project: ProjectReducer
};

const store = configureStore({
    reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store;
