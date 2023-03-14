import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTaskApi, deleteTaskApi, saveTaskApi, archiveTaskApi, deArchiveTaskApi } from "../../api/task/Task";
import { ISaveTaskReq } from "../../api/task/type";

export const GetAllTask = createAsyncThunk(
  "/services/app/Task/GetAll",
  async () => {
    const response = await getAllTaskApi();
    
    return response;
  }
);

export const deleteTask = createAsyncThunk(
  "/services/app/Task/Delete",
  async (id: number) => {
    
    const response = { ...(await deleteTaskApi(id)), id };
    return response;
  }
);

export const SaveTask = createAsyncThunk(
  "/services/app/Task/Save",
  async (newTask: ISaveTaskReq) => {
    const response = await saveTaskApi(newTask);
    return response 
  }
);

export const archiveTask = createAsyncThunk(
  '/services/app/Task/Archive',
  async(id: number) => {
    const response = {...await archiveTaskApi(id), id};
    return response;
  }
);

export const deArchiveTask = createAsyncThunk(
  '/services/app/Task/DeArchive',
  async(id: number) => {
    const response = {...(await deArchiveTaskApi({id})), id };
    return response;
  }
)