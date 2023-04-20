import { createSlice } from "@reduxjs/toolkit";
import { fetchDevices } from "../../actions/device";
import IDeviceState from "../../interface/device";

// Khởi tạo slice cho việc quản lý dữ liệu devices

const initialState: IDeviceState = {
  data: [],
  isLoading: false,
  error: null,
};

const devicesSlice = createSlice({
  name: "devices",
  initialState: initialState,
  reducers: {
    fetchDevicesStart: (state) => {
      state.isLoading = true;
      state.error = null;
      console.log(state, "fetchDevicesStart");
    },
    fetchDevicesSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    },
    fetchDevicesFailure: (state, action) => {
      console.log(state, action, "fetchDevicesFailure");

      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDevices.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    });
  },
});

// Export các reducer và action creators của slice
export const { fetchDevicesStart, fetchDevicesSuccess, fetchDevicesFailure } =
  devicesSlice.actions;

export default devicesSlice.reducer;
