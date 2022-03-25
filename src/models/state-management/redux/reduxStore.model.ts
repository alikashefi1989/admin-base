import { UserEntityModel } from "../../entities/user.model";

export interface ReduxStoreModel {
    user : UserEntityModel | null;
    token : string | null;
}