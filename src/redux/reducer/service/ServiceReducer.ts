import { createSlice } from "@reduxjs/toolkit";
import IStateService from "../../interface/service";
import { fetchService } from "../../actions/service";


// Khởi tạo slice cho việc quản lý dữ liệu service

const initialState: IStateService = {
  data: [],
  isLoading: false,
  error: null,
};

const sSlice = createSlice({
  name: "service",
  initialState: initialState,
  reducers: {
    fetchsStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchsSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    },
    fetchsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchService.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    });
  },
});

// Export các reducer và action creators của slice
export const { fetchsStart, fetchsSuccess, fetchsFailure } =
  sSlice.actions;

export default sSlice.reducer;
