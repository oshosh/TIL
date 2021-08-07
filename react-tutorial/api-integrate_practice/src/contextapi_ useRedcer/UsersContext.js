import React, { createContext, useReducer, useContext } from 'react';
import * as api from '../api/api';
import axios from 'axios';
// import createAsyncDispather, { createAsyncHandler, initialAsyncState } from './Utils/asyncActionUtils';

const initialAsyncState = {
    users: {
        loading: false,
        data: null,
        error: null
    },
    user: {
        loading: false,
        data: null,
        error: null
    }
}

function reducer(state, action) {
    let obj = null

    switch (action.type) {
        case 'GET_USERS_SUCCESS':
            obj = {
                ...state,
                users: {
                    data: action.data,
                    loading: false,
                    error: null
                }
            }
            return obj;
        case 'GET_USERS':
            obj = {
                ...state,
                users: {
                    data: state.users.data,
                    loading: action.loading,
                    error: null
                }
            }
            return obj;
        case 'GET_USERS_ERROR':
            obj = {
                ...state,
                users: {
                    data: null,
                    loading: false,
                    error: action.error
                }
            }
            return obj

        case 'GET_USER':
            obj = {
                ...state,
                user: {
                    data: state.user.data,
                    loading: action.loading,
                    error: null
                }
            }
            return obj
        case 'GET_USER_SUCCESS':
            obj = {
                ...state,
                user: {
                    data: action.data,
                    loading: false,
                    error: null
                }
            }
            return obj;
        case 'GET_USER_ERROR':
            obj = {
                ...state,
                user: {
                    data: null,
                    loading: false,
                    error: action.error
                }
            }
            return obj;

        default:
            throw new Error('Unhandled action tpye' + action.type)
    }
}

const UseContextState = createContext(null)
const UseContextDispatch = createContext(null)

export function UsersProvider({ children }) {
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

export async function getUsers(dispatch) {
    dispatch({
        type: 'GET_USERS',
        loading: true
    })
    try {
        const response = await api.getUsersApi()

        dispatch({
            type: 'GET_USERS_SUCCESS',
            data: response
        })
    } catch (error) {
        dispatch({
            type: 'GET_USERS_SUCCESS',
            error: error
        })
    }
    dispatch({
        type: 'GET_USERS',
        loading: false
    })
}

export async function getUser(dispatch, id) {

    dispatch({
        type: 'GET_USER',
        loading: true
    })
    try {
        const response = await api.getUserApi(id)
        dispatch({
            type: 'GET_USER_SUCCESS',
            data: response
        })
    } catch (error) {
        dispatch({
            type: 'GET_USER_SUCCESS',
            error: error
        })
    }
    dispatch({
        type: 'GET_USER',
        loading: false
    })
}