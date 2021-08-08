import React from 'react';

export const initialState = {
    loading: false,
    data: null,
    error: null
}

//  usersContext_reactory에서 생성을 받는 함수
export function createAsyncHandler(apiType, key) {
    const SUCCESS = `${apiType}_SUCCESS`;
    const ERROR = `${apiType}_ERROR`;

    // reducer에 의해 실행되는 handler
    function handler(state, action) {
        let obj = {}

        switch (action.type) {
            case apiType:
                obj = {
                    ...state,
                    [key]: {
                        data: state[key].data,
                        loading: action.loading,
                        error: null
                    }
                }
                return obj;
            case SUCCESS:
                obj = {
                    ...state,
                    [key]: {
                        data: action.data,
                        loading: false,
                        error: null
                    }
                }
                return obj;
            case ERROR:
                obj = {
                    ...state,
                    [key]: {
                        data: null,
                        loading: false,
                        error: action.error
                    }
                }
                return obj;
        }
    }
    return handler
}


// usersContext_reactory에서 생성을 받는 함수
export default function createAsyncDispather(apiType, apiData) {
    const SUCCESS = `${apiType}_SUCCESS`;
    const ERROR = `${apiType}_ERROR`;

    // getUser에서 dispatch와 rest 정보를 받아 수행
    async function actionHandler(dispatch, ...rest) {

        dispatch({
            type: apiType,
            loading: true
        })
        try {
            const response = await apiData(...rest)

            dispatch({
                type: SUCCESS,
                data: response
            })
        } catch (e) {
            dispatch({
                type: ERROR,
                e
            })
        }
        dispatch({
            type: apiType,
            loading: false
        })
    }
    return actionHandler
}