
export interface IAuthenticateReq {
    userNameOrEmailAddress: string;
    password: string;
    rememberClient: boolean;
}

export interface IAuthenticateRes {
    result: {
        accessToken: string;
        encryptedAccessToken: string;
        expireInSeconds: number;
        userId: number;
    };
    // error: IError;
    success: boolean;
}
  