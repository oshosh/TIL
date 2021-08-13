export const cratePromsieThunk = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    const thunkCreator = (param) => async (dispatch) => {

        dispatch({ type })
        try {
            const payload = await promiseCreator(param)

            dispatch({
                type: SUCCESS,
                payload
            })
        } catch (e) {
            // flux standard action
            dispatch({
                type: ERROR,
                payload: e,
                error: true
            })
        }
    }
    return thunkCreator;
}
const defaultIdSelector = (param) => {
    return param
}

export const cratePromsieThunkId = (type, promiseCreator, idSelector = defaultIdSelector) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    const thunkCreator = (param) => async (dispatch) => {

        const id = idSelector(param)
        dispatch({ type, meta: id })
        try {
            const payload = await promiseCreator(param)

            dispatch({
                type: SUCCESS,
                payload,
                meta: id
            })
        } catch (e) {
            // flux standard action
            dispatch({
                type: ERROR,
                payload: e,
                error: true,
                meta: id
            })
        }
    }
    return thunkCreator;
}

export const handleAsyncActions = (type, key, keepData) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    const reducer = (state, action) => {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: reducerUtils.loading(keepData ? state[key].data : null),
                }
            case SUCCESS:
                return {
                    ...state,
                    [key]: reducerUtils.success(action.payload),
                }
            case ERROR:
                return {
                    ...state,
                    [key]: reducerUtils.error(action.payload),
                }
            default:
                return state;
        }
    }
    return reducer
}

export const handleAsyncActionsById = (type, key, keepData) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    const reducer = (state, action) => {
        const id = action.meta;

        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.loading(keepData ? (state[key][id] && state[key][id].data) : null)
                    }
                }
            case SUCCESS:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.success(action.payload),
                    }
                }
            case ERROR:
                return {
                    ...state,
                    [key]: {
                        ...state[key],
                        [id]: reducerUtils.error(action.payload),
                    }
                }
            default:
                return state;
        }
    }
    return reducer
}

export const reducerUtils = {
    initial: (data = null) => (
        {
            loading: false,
            data: null,
            error: null
        }
    ),
    loading: (prevState = null) => ({
        data: prevState,
        loading: true,
        error: null,
    }),
    success: (data) => ({
        data,
        loading: false,
        error: null
    }),
    error: (error) => ({
        data: null,
        loading: false,
        error
    })
}