import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStoreModel } from "../models/state-management/redux/reduxStore.model";
import { REDUX_ACTIONS } from "../state-management/redux/reduxAction.enum";

function Dashboard() {

    const data = useSelector((state: ReduxStoreModel) => { return state.token });
    const dispatch = useDispatch()

    return (
        <>
            <div>
                Home Page
            </div>
            {data === null ? 'empty' : data}
            <button onClick={() => { dispatch({ type: REDUX_ACTIONS.RESET_TOKEN, payload: null }) }}>reset token</button>
            <button onClick={() => { dispatch({ type: REDUX_ACTIONS.SET_TOKEN, payload: 'jafarrrrrrrrrrrrrrrrrrrrr' }) }}>set token</button>
            <br />
            <br />
            <br />
            <div
                onClick={() => {
                    dispatch({ type: REDUX_ACTIONS.RESET_TOKEN, payload: null });
                    dispatch({ type: REDUX_ACTIONS.RESET_USER, payload: null });
                }}
            >
                LogOut
            </div>
        </>
    )
}

export default Dashboard

