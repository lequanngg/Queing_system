import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthenticateApi } from "../../api/auth/auth";
import { IAuthenticateReq } from "../../api/auth/types";

export const AuthenticateAction = createAsyncThunk(
  "tokenAuth/Authenticate",
  async ({
    userNameOrEmailAddress,
    password,
    rememberClient,
  }: IAuthenticateReq) => {
    const response = await AuthenticateApi();
    return response;
  }
);
