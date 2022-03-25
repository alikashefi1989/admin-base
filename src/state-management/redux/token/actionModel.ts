import { Action } from 'redux';
import { REDUX_ACTIONS } from '../reduxAction.enum';

export interface TokenActions extends Action<REDUX_ACTIONS> {
    payload : string | null;
}