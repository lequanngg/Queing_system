
export interface IAuthenticateReq {
    userNameOrEmailAddress: string;
    password: string;
    rememberClient: boolean;
    email: string;
    duplicatePass1: string;
    duplicatePass2: string;
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
  