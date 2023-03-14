/* eslint-disable @typescript-eslint/no-unused-vars */
import { deleteApi, getApi, postApi } from "../../utils/apiHelper";
import {
  IArchiveTaskRes,
  IDeArchive,
  IDeleteTaskRes,
  ISaveTaskReq,
  ISaveTaskRes,
  ITaskGetAllRes,
} from "./type";

export const getAllTaskApi = async () => {
  const data = await getApi<ITaskGetAllRes>("/services/app/Task/GetAll");
  return data;
};

export const deleteTaskApi = async (id: number) => {
  const data = await deleteApi<IDeleteTaskRes>(
    `/services/app/Task/Delete?Id=${id}`
  );
  return data;
};

export const saveTaskApi = async (newTask: ISaveTaskReq) => {
  const data = await postApi<ISaveTaskReq, ISaveTaskRes>(
    "/services/app/Task/Save",
    newTask
  );
  return data;
};

export const archiveTaskApi = async (id: number) => {
  const data = await deleteApi<IDeleteTaskRes>(`/services/app/Task/Archive?Id=${id}`);
        return data;
};

export const deArchiveTaskApi = async ({id}: IDeArchive) => {
  const data = await postApi<IDeArchive, IDeleteTaskRes>(
    `/services/app/Task/DeArchive?Id=${id}`,
    {
      id
    }
  );
  return data;
};

