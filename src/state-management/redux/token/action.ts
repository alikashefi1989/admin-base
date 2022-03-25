import { REDUX_ACTIONS } from '../reduxAction.enum';
import { TokenActions } from './actionModel';

export function setToken(token : string) : TokenActions {
    return {
        type : REDUX_ACTIONS.SET_TOKEN,
        payload : token,
    }
}

export function resetToken() : TokenActions {
    return { 
        type : REDUX_ACTIONS.RESET_TOKEN,
        payload : null
    }
}