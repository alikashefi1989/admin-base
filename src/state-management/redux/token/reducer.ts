import { REDUX_ACTIONS } from '../reduxAction.enum';
import { TokenActions } from './actionModel';
import { ReduxStoreModel } from '../../../models/state-management/redux/reduxStore.model';

export function reducer(
    prevState : ReduxStoreModel['token'],
    action : TokenActions
) : ReduxStoreModel['token'] {
    switch (action.type){
        case REDUX_ACTIONS.SET_TOKEN :
            return action.payload;
        case REDUX_ACTIONS.RESET_TOKEN :
            return action.payload;
    }
    if(prevState){
        return prevState;
    }
    return null;
}