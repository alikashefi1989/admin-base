import { UserEntityModel } from "../entities/user.model";

export interface UserExistApiPayloadModel {
    username: string;
}

export interface UserExistApiResponseModel {
    userExists: boolean;
    mobile: string;
}

export interface VerifyAndLoginPayloadModel {
    username: string;
    password: string;
    code: number;
}

export interface VerifyAndLoginResponseModel {
    token: string;
    user: UserEntityModel
}