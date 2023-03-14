import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../../api/project/TypeProjectApi";
import { ITaskReq } from "../../../api/task/type";
import {
  deleteProject,
  getAllCustomer,
  getAllProject,
  getUserNotPagging,
  saveProject,
} from "../../actions/Project";
import { GetAllTask } from "../../actions/task";
import IProjectState from "../../interface/Project";

const initialState: IProjectState = {
  allProjects: [],
  progress: "",
  success: false,
  hide: false,
  searchName: "",
  saveProject: [],
  customers: [],
  tasks: [],
  selectedMembers: [],
  selectTasks: [],
  users: [],
  filteredUsers: [],
  filterTasks: [],
  error: {
    code: 0,
    message: "",
    details: "",
    validationErrors: {},
  },
  project: {
    name: "",
    code: "",
    status: 0,
    timeStart: "",
    timeEnd: "",
    note: "",
    projectType: 0,
    customerId: 0,
    tasks: [
      {
        taskId: 0,
        billable: false,
        id: 0,
      },
    ],
    users: [
      {
        userId: 0,
        type: 0,
        id: 0,
      },
    ],
    projectTargetUsers: [
      {
        userId: 0,
        roleName: "",
        id: 0,
      },
    ],
    isAllUserBelongTo: false,
    id: 0,
  },
};

const getAllProjectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    resetProgress: (state) => {
      state.progress = "";
    },
    setHideStatus: (state, action) => {
      state.hide = action.payload;
    },
    setSearchName(state, action) {
      state.searchName = action.payload.searchName;
    },
    pushMember: (state, action: PayloadAction<IUser>) => {
      state.selectedMembers.push(action.payload);
      state.filteredUsers = state.filteredUsers.filter(
        (user) => user.id !== action.payload.id
      );
      console.log(action.payload.id);
    },
    removeMember: (state, action: PayloadAction<IUser>) => {
      state.selectedMembers = state.selectedMembers.filter(
        (user) => user.id !== action.payload.id
      );
      state.filteredUsers.push(action.payload);
      console.log(action.payload.id);
    },
    pushTask: (state, action: PayloadAction<ITaskReq>) => {
      state.selectTasks.push(action.payload);
      state.filterTasks = state.filterTasks.filter(
        (task) => task.id !== action.payload.id
      );
      console.log(state.filterTasks);
    },
    removeTask: (state, action) => {
      state.selectTasks = state.selectTasks.filter(
        (task) => task.id !== action.payload.id
      );
      state.filterTasks.push(action.payload);
    },
    updateBillable: (state, action: PayloadAction<ITaskReq>) => {
      state.selectTasks = state.selectTasks.map((task) => {
        if (task.id === action.payload.id) {
          task.billable = action.payload.billable;
        }
        return task;
      });
    },

    filter(state, action) {
      state.filteredUsers = state.users.filter(
        (user) =>
          (action.payload.branch === "All" ||
            user.branch === action.payload.branch) &&
          (action.payload.level === "All" ||
            user.level === action.payload.level) &&
          (action.payload.type === "All" || user.type === action.payload.type)
      );
      console.log(action.payload.branch);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProject.fulfilled, (state, action) => {
      state.progress = "done";
      state.allProjects = action.payload.result;
    });

    builder.addCase(getAllCustomer.fulfilled, (state, action) => {
      state.progress = "done";
      state.customers = action.payload.result;
    });

    builder.addCase(getUserNotPagging.fulfilled, (state, action) => {
      state.progress = "done";
      state.users = action.payload.result;
    });

    builder.addCase(GetAllTask.fulfilled, (state, action) => {
      state.progress = "done";
      state.tasks = action.payload.result;
      state.filterTasks = action.payload.result;
      console.log(state.filterTasks);
    });
    builder.addCase(deleteProject.fulfilled, (state, action) => {
      state.progress = "done";
      if (action.payload.success=== true) {
        state.tasks = state.tasks.filter(
            (project) => project.id !== action.payload.id
        );
    }
    });
    builder.addCase(saveProject.fulfilled, (state, action) => {
      state.progress = "done1";
      if (
        state.saveProject.find(
          (project) => project.id === action.payload.result.id
        )
      ) {
        state.saveProject = state.saveProject.map((project) => {
          if (project.id === action.payload.result.id) {
            project.customerId = action.payload.result.customerId;
            project.name = action.payload.result.name;
            project.code = action.payload.result.code;
            project.timeStart = action.payload.result.timeStart;
            project.timeEnd = action.payload.result.timeEnd;
            project.note = action.payload.result.note;
            project.isAllUserBelongTo = action.payload.result.isAllUserBelongTo;
            project.projectType = action.payload.result.projectType;
            project.users = action.payload.result.users;
            project.tasks = action.payload.result.tasks;
          }
          return project;
        });
      } else {
        state.saveProject.push(action.payload.result);
      }
    });
  },
});

export const {
  setHideStatus,
  setSearchName,
  resetProgress,
  pushMember,
  removeMember,
  filter,
  pushTask,
  removeTask,
  updateBillable,
} = getAllProjectSlice.actions;
export default getAllProjectSlice.reducer;
