import { AnyAction, combineReducers, createStore, Reducer, ReducersMapObject } from "redux";
import { ReduxStoreModel } from "../../models/state-management/redux/reduxStore.model";
import { reducer as TokenReducer } from './token/reducer';
import { reducer as UserReducer } from './user/reducer'; 
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers : ReducersMapObject<ReduxStoreModel,AnyAction> = {
    token : TokenReducer as Reducer<ReduxStoreModel['token'],AnyAction>,
    user : UserReducer as Reducer<ReduxStoreModel['user'], AnyAction>,
}

const combinedReducers = combineReducers(reducers);

const persistConfig = {
    key : 'root',
    storage
};

const persistedCombinedReducers = persistReducer(persistConfig, combinedReducers);

export const store = createStore(persistedCombinedReducers);

export const persistedStore = persistStore(store);