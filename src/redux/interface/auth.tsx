
export default interface IAuthenticateReq {
    userNameOrEmailAddress: string;
    password: string;
    rememberClient: boolean;
  }
  export interface IAuthState {
    progress: string;
    user: {
      accessToken: string;
      userId: number;
    };
    success: boolean;
  }