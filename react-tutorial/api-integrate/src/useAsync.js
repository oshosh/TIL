import React, { useEffect, useReducer, useCallback } from 'react';

function reducer(state, action) {
    switch (action.type) {

        case 'LOADING':
            return {
                loding: true,
                data: null,
                error: null
            }
        case 'SUCCESS':
            return {
                loding: false,
                error: null,
                data: action.data,
            }
        case 'ERROR':
            return {
                data: null,
                loding: false,
                error: action.error
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}

export default function useAsync(callback, deps = [], skip = false) {

    const [state, dispatch] = useReducer(reducer, {
        data: null,
        loding: false,
        error: null
    })

    const fetchData = useCallback(async () => {
        dispatch({ type: "LOADING" })
        try {
            const data = await callback();
            dispatch({ type: "SUCCESS", data })
        } catch (e) {
            dispatch({ type: "ERROR", error: e })
        }
    }, [callback]);

    useEffect(() => {
        if (skip) {
            return null;
        }
        fetchData();
    }, deps);

    return [state, fetchData]
}