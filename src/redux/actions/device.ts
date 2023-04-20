import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import firebase from "firebase/app";
import "firebase/firestore";
import { query, collection, getDocs } from "firebase/firestore";
import { db } from "../../hooks/config";

// Khởi tạo Firebase app

// Thunk action để gọi dữ liệu từ Firebase
export const fetchDevices = createAsyncThunk(
  "devices/fetchDevices",
  async () => {
    try {
      const queryDocument = query(collection(db, "device"));
      let row: any[] = [];
      const querySnapshot = await getDocs(queryDocument);
      querySnapshot.forEach((item) => {
        const data = item.data();
        data.id = item.id;
        row.push(data);
      });
      return row;
    } catch (error) {
      throw new Error("Failed to fetch devices from Firebase");
    }
  }
);
