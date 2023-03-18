import { postApi } from "../../utils/apiHelper";
import { IAuthenticateReq, IAuthenticateRes } from "./types";


// export const AuthenticateApi = async ({
//   userNameOrEmailAddress,
//   password,
//   rememberClient,
// }: IAuthenticateReq) => {
//   const data = await postApi<
//     IAuthenticateReq,IAuthenticateRes
//   >(`/TokenAuth/Authenticate`, {
//     userNameOrEmailAddress,
//     password,
//     rememberClient,
//   });
//   return data;
// };


export const AuthenticateApi = () => {
  return {}
}