import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ProjectReducer from "./project/ProjectReducer";
import taskReducer from "./task/taskReducer";

const reducer = { 
    task: taskReducer,
    project: ProjectReducer,
};

const store = configureStore({
    reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store;
