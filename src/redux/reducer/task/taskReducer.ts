import { createSlice } from "@reduxjs/toolkit";
import {
  SaveTask,
  GetAllTask,
  deleteTask,
  archiveTask,
  deArchiveTask,
} from "../../actions/task";
import { ITaskState } from "../../interface/Task";

const initialState: ITaskState = {
  tasks: [],
  progress: "",
  success: false,
  error: {
    code: 0,
    message: "",
    details: "",
    validationErrors: {},
  },
  searchName: "",
};

const GetAllSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    resetprogress(state) {
      state.progress = "";
    },
    setSearchName(state, action) {
      state.searchName = action.payload.searchName;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetAllTask.pending, (state, action) => {
      // action is inferred correctly here if using TS
      state.progress = "pending";
    });
    // You can chain calls, or have separate `builder.addCase()` lines each time
    builder.addCase(GetAllTask.fulfilled, (state, action) => {
      state.tasks = action.payload.result;
    });

    builder.addCase(SaveTask.fulfilled, (state, action) => {
      state.tasks.push(action.payload.result);
    });

    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    });

    builder.addCase(archiveTask.fulfilled, (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.isDeleted = true;
        }
        return task;
      });
    });

    builder.addCase(deArchiveTask.fulfilled, (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task.isDeleted = false;
        }
        return task;
      });
    });
  },
});

export const { resetprogress, setSearchName } = GetAllSlice.actions;
export default GetAllSlice.reducer;

