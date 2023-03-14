export interface ITaskReq {
  name: string;
  isDeleted: boolean;
  type: number;
  id: number;
  billable: boolean;
}

export interface ITaskGetAllRes {
  result: ITaskReq[];
}

export interface IError {
  code: number;
  message: string | null;
  details: string | null;
  validationErrors: object;
}

export interface ITaskRes {
  result: {
    name: string;
    type: number;
    isDeleted: boolean;
    id: number;
  };
}
export interface ITaskGetAllRes {
  result: ITaskReq[];
}

export interface IDeleteTaskRes {
  id: number;
  success: boolean;
  error: IError;
}

export interface ISaveTaskReq {
  name: string;
  type: number;
  id: number;
}

export interface ISaveTaskRes {
  result: ITaskReq;
}

export interface IArchiveTaskRes {
id: number;
success: boolean;
error: IError;
}

export interface IDeArchive {
  id: number;
}