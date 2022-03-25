import { UserActions } from "./actionModel";
import { REDUX_ACTIONS } from "../reduxAction.enum";
import { ReduxStoreModel } from "../../../models/state-management/redux/reduxStore.model";

export function reducer(
    prevState : ReduxStoreModel['user'],
    action : UserActions
) : ReduxStoreModel['user'] {
    switch(action.type) {
        case REDUX_ACTIONS.SET_USER : 
            return action.payload;
        case REDUX_ACTIONS.RESET_USER : 
            return action.payload;
    }
    if (prevState){
        return prevState
    }
    return null
}