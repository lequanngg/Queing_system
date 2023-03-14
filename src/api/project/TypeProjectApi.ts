import { IError } from "../task/type";

export interface IProject {
  customerName: string;
  name: string;
  code: string;
  status: number;
  pms: string[];
  activeMember: number;
  projectType: number;
  timeStart: string;
  timeEnd: string;
  id: number;
}

export interface IProjectRes {
  result: IProject[];
}

export interface IGroups {
  [key: string]: IProject[];
}
export interface IProjectReq {
  status?: number;
  search?: string;
}

export interface ICustomer {
  id?: number;
  name?: string;
  address?: string;
}

export interface ICustomerRes {
  result: ICustomer[];
}

export interface IClientRes {
  result: INewClient;
}

export interface INewClient {
  id?: number;
  name?: string;
  address?: string;
}

export interface IUser {
  name: string;
  isActive: boolean;
  type: number;
  jobTitle: string;
  level: number;
  userCode: string;
  avatarPath: string;
  branch: number;
  id: number;
  projectType?: number;
}
export interface IUserRes {
  result: IUser[];
}

export interface NewProject {
  code: string;
  customerId: number;
  isAllUserBelongTo: boolean;
  name: string;
  note: string;
  projectTargetUsers: {
    userId: number;
    roleName: string;
    id: number;
  }[];
  projectType: number;
  status: number;
  tasks: { taskId: number; billable?: boolean; id: number }[];
  timeEnd: string;
  timeStart: string;
  users: { userId: number; type?: number; id: number }[];
}

export interface ICreateProjectRes {
  result: ICreateProject;
}

export interface ICreateProject {
  name: string;
  code: string;
  status: number;
  timeStart: string;
  timeEnd: string;
  note: string;
  projectType: number;
  customerId: number;
  tasks: {
    taskId: number;
    billable?: boolean;
    id: number;
  }[];
  users: {
    userId: number;
    type?: number;
    id: number;
  }[];
  projectTargetUsers: {
    userId: number;
    roleName: string;
    id: number;
  }[];
  isAllUserBelongTo: boolean;
  id?: number;
}

export interface IDeleteProjectRes {
  id: number;
  success: boolean;
  error: IError;
}


export interface IActiveProject {
  id: number;
}
export interface IActiveProjectRes {
  success: boolean;
  error: IError;
}