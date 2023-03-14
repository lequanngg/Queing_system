import { ICreateProject, ICustomer, IGroups, IProject, IUser } from "../../api/project/TypeProjectApi";
import { IError, ITaskReq } from "../../api/task/type";

export default interface IProjectState {
  allProjects: IProject[];
  success: boolean;
  progress: string;
  error: IError;
  hide: boolean;
  searchName: string;
  customers: ICustomer[];
  selectedMembers: IUser[],
  saveProject: ICreateProject[],
  selectTasks:ITaskReq[];
  users: IUser[];
  filteredUsers: IUser[];
  tasks: ITaskReq[];
  project: ICreateProject;
  filterTasks:ITaskReq[];

}


