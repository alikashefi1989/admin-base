import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ReduxStoreModel } from "../models/state-management/redux/reduxStore.model";
import { UserEntityModel } from '../models/entities/user.model';
import { resetUser, setUser } from "../state-management/redux/user/action";
import { resetToken, setToken } from "../state-management/redux/token/action";
import { useNavigate } from 'react-router-dom';

interface IProps {
    setUser: (user: UserEntityModel) => void;
    setToken: (token: string) => void;
    resetUser: () => void;
    resetToken: () => void;
}

interface IState {
    name: string;
    lastName: string;
}

function LoginComponent(props: IProps) {

    const [user, setUser] = useState<IState>({ name: '', lastName: '' });

    const [isDisable, setIsdisable] = useState<boolean>(true);

    const navigate = useNavigate();

    useEffect(() => {
        window.onpopstate = () => { navigate('/login') };
    });

    useEffect(() => {
        if (user.name === '' || user.lastName === '') {
            setIsdisable(true);
        } else {
            setIsdisable(false)
        }
    }, [user]);

    return (
        <>
            <div>
                <label htmlFor="">name</label>
                <input
                    type="text"
                    value={user.name}
                    onChange={(e: any) => {
                        setUser({
                            ...user,
                            name: e.target.value,
                        })
                    }}
                />
            </div>
            <div>
                <label htmlFor="">last name</label>
                <input
                    type="text"
                    value={user.lastName}
                    onChange={(e: any) => {
                        setUser({
                            ...user,
                            lastName: e.target.value,
                        })
                    }}
                />
            </div>
            <div>
                <button
                    disabled={isDisable}
                    onClick={() => {
                        props.setUser(user);
                        props.setToken(getRandomToken());
                        window.onpopstate = () => { }
                        navigate('/')
                    }}
                >
                    Login
                </button>
            </div>
        </>
    )
}

const reduxState2Props = (reduxState: ReduxStoreModel) => {
    return {

    }
}

const reduxDispatch2Props = (dispatch: Dispatch) => {
    return {
        setUser: (user: UserEntityModel) => dispatch(setUser(user)),
        setToken: (token: string) => dispatch(setToken(token)),
        resetUser: () => dispatch(resetUser()),
        resetToken: () => dispatch(resetToken()),
    }
}

export const Login = connect(reduxState2Props, reduxDispatch2Props)(LoginComponent);

function getRandomToken(): string {
    return new Date().getTime().toString();
}