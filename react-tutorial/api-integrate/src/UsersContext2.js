import React, { createContext, useReducer, useContext } from 'react';
import * as api from './api/api';
import createAsyncDispather, { createAsyncHandler, initialAsyncState } from './Utils/asyncActionUtils';

const initialState = {
    users: initialAsyncState,
    user: initialAsyncState
}

//GET_USERS
//GET_UERS_SUCCESS
//GET_USERS_ERROR
//GET_USER
//GET_UER_SUCCESS
//GET_USER_ERROR

const usersHandler = createAsyncHandler('GET_USERS', 'users')
const userHandler = createAsyncHandler('GET_USER', 'user')

function userReducer(state, action) {
    switch (action.type) {
        case 'GET_USERS':
        case 'GET_USERS_SUCCESS':
        case 'GET_USERS_ERROR':
            return usersHandler(state, action)

        case 'GET_USER':
        case 'GET_USER_SUCCESS':
        case 'GET_USER_ERROR':
            return userHandler(state, action)

        default:
            throw new Error('Unhandled action tpye' + action.type)
    }
}
const UsersStateContext2 = createContext(null)
const UsersDispatchContext2 = createContext(null)

export function UsersProvider2({ children }) {

    const [state, dispatch] = useReducer(userReducer, initialState);
    debugger
    return (
        <UsersStateContext2.Provider value={state}>
            <UsersDispatchContext2.Provider value={dispatch}>
                {children}
            </UsersDispatchContext2.Provider>
        </UsersStateContext2.Provider>
    )
}

export function useUsersState() {

    const state = useContext(UsersStateContext2)

    if (!state) {
        throw new Error('Cannot find UserProvider')
    }
    return state
}

export function useUsersDispatch() {
    const dispatch = useContext(UsersDispatchContext2)
    if (!dispatch) {
        throw new Error('Cannot find UsersDispatchContextProvider')
    }
    return dispatch
}

export const getUsers = createAsyncDispather('GET_USERS', api.getUsers)
export const getUser = createAsyncDispather('GET_USER', api.getUser)