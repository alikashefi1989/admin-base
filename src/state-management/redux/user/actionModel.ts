import { Action } from 'redux';
import { REDUX_ACTIONS } from '../reduxAction.enum';
import { UserEntityModel } from "../../../models/entities/user.model";

export interface UserActions extends Action<REDUX_ACTIONS>{
    payload : UserEntityModel | null;
}
