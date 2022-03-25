import { UserActions } from "./actionModel";
import { UserEntityModel } from "../../../models/entities/user.model";
import { REDUX_ACTIONS } from "../reduxAction.enum";

export function setUser(user : UserEntityModel) : UserActions {
    return {
        type : REDUX_ACTIONS.SET_USER,
        payload : user,
    }
}

export function resetUser() : UserActions {
    return {
        type : REDUX_ACTIONS.RESET_USER,
        payload : null,
    }
}