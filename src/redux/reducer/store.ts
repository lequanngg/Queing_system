import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ProjectReducer from "./project/ProjectReducer";
import taskReducer from "./task/taskReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import DeviceReducer from "./device/DeviceReducer";
import ServiceReducer from "./service/ServiceReducer";

const reducer = { 
    task: taskReducer,
    project: ProjectReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    device: DeviceReducer,
    service: ServiceReducer
};

const store = configureStore({
    reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store;
