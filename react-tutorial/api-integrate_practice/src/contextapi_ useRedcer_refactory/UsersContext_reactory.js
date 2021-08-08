import React, { createContext, useReducer, useContext } from 'react';
import * as api from '../api/api';
import axios from 'axios';
import createAsyncDispather, { createAsyncHandler, initialState } from '../Utils/asyncActionUtils';

const initialAsyncState = {
    users: initialState,
    user: initialState
}

const usersHandler = createAsyncHandler('GET_USERS', 'users')
const userHandler = createAsyncHandler('GET_USER', 'user')

function reducer(state, action) {
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

const UseContextState = createContext(null)
const UseContextDispatch = createContext(null)

export function UsersProvider_refactory({ children }) {
    const [state, dispatch] = useReducer(reducer, initialAsyncState)

    return (
        <UseContextState.Provider value={state}>
            <UseContextDispatch.Provider value={dispatch}>
                {children}
            </UseContextDispatch.Provider>
        </UseContextState.Provider>
    )
}

export function useUsersState() {
    const state = useContext(UseContextState)
    return state
}

export function useUsersDispatch() {
    const dispatch = useContext(UseContextDispatch)

    return dispatch
}

export const getUsers = createAsyncDispather('GET_USERS', api.getUsersApi)
export const getUser = createAsyncDispather('GET_USER', api.getUserApi)