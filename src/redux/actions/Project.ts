import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createCustomerApi,
  getAllCustomerApi,
  getAllProjectApi,
  getUserNotPaggingApi,
  saveProjectApi,
  deleteProjectApi,
  inActiveProjectApi,
  activeProjectApi
} from "../../api/project/ProjectApi";
import {
  IActiveProject,
  IClientRes,
  ICreateProject,
  ICreateProjectRes,
  INewClient,
  IProjectReq,
} from "../../api/project/TypeProjectApi";

export const getAllProject = createAsyncThunk(
  "/services/app/Project/GetAll",
  async ({ status }: IProjectReq) => {
    const response = { ...(await getAllProjectApi({ status })) };
    return response;
  }
);

export const getAllCustomer = createAsyncThunk(
  "/services/app/Customer/GetAll",
  async () => {
    const response = { ...(await getAllCustomerApi()) };
    return response;
  }
);

export const createCustomer = createAsyncThunk(
  `/services/app/Customer/Save`,
  async ({ id, name, address }: INewClient) => {
    const response = { ...(await createCustomerApi({ id, name, address })) };
    return response as IClientRes;
  }
);

export const getUserNotPagging = createAsyncThunk(
  `/services/app/User/GetUserNotPagging`,
  async () => {
    const response = { ...(await getUserNotPaggingApi()) };
    return response;
  }
);

export const deleteProject = createAsyncThunk(

  "/services/app/Project/Delete",
  async (id: number) => {
    
    const response = { ...(await deleteProjectApi(id)), id };
    return response;
  }

);

export const inActiveProject = createAsyncThunk(

  "/services/app/Project/Inactive",
  async ({id}: IActiveProject) => {
    
    const response = { ...(await inActiveProjectApi({id})), id };
    return response;
  }

);

export const activeProject = createAsyncThunk(
  "services/app/Project/Active", async ({id}: IActiveProject) => {
    const response = { ...(await activeProjectApi({id})), id };
    console.log(response);
    
    return response;
  }
);



export const saveProject = createAsyncThunk(
  `services/app/Project/Save`,
  async ({
    id,
    name,
    code,
    status,
    timeStart,
    timeEnd,
    note,
    projectType,
    customerId,
    tasks,
    users,
    projectTargetUsers,
    isAllUserBelongTo,
  }: ICreateProject) => {


    const response = { ...(await saveProjectApi({
      id,
      name,
      code,
      status,
      timeStart,
      timeEnd,
      note,
      projectType,
      customerId,
      tasks,
      users,
      projectTargetUsers,
      isAllUserBelongTo,
    })) };



    return response as ICreateProjectRes;
  }
)
