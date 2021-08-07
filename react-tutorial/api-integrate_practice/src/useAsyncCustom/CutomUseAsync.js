import { useReducer, useEffect } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'success':
            return {
                ...state,
                data: action.data
            }
        case 'loading':
            const obj = {
                ...state,
                loading: action.loading
            }
            return obj;
        case 'error':
            return {
                ...state,
                error: action.error
            }
        default:
            return console.log(`${action.type} error`)
    }
}

export function useAsync(callbackAPI, deps = []) {
    const [state, dispatch] = useReducer(reducer, {
        data: null,
        loading: false,
        error: false
    })

    const fetchData = async () => {
        try {
            dispatch({
                type: 'loading',
                loading: true
            })
            const response = await callbackAPI()
            dispatch({
                type: 'success',
                data: response
            })
        } catch (e) {
            dispatch({
                type: 'error',
                error: e
            })
        }
        dispatch({
            type: 'loading',
            loading: false
        })
    }

    useEffect(() => {
        fetchData()
    }, deps)

    return [state, fetchData]
}
