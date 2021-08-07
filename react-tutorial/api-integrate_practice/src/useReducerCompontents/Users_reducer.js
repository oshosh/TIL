import axios from 'axios';
import React, { useReducer, useEffect, useState } from 'react';
import UserInfo_reducer from './UserInfo_reducer';

function Users_reducer() {

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

    const [state, dispatch] = useReducer(reducer, {
        data: null,
        loading: false,
        error: false
    })

    const [userId, setUserId] = useState(null)

    async function getUsersAPI() {
        try {
            dispatch({
                type: 'loading',
                loading: true
            })

            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch({
                type: 'success',
                data: response.data
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
        getUsersAPI()
    }, [])
    const { data: users, loading, error } = state


    if (loading) return <div>로딩 중 입니다...</div>
    if (error) return <div>에러</div>
    if (!users) return null;

    return (
        <>
            <ul>
                {
                    users.map(user =>
                        <li key={user.id} onClick={() => setUserId(user.id)}>
                            {user.username} ({user.name})
                        </li>
                    )
                }
            </ul>
            <button onClick={getUsersAPI}>
                다시 불러오기
            </button>
            {userId && <UserInfo_reducer id={userId} />}
        </>
    );
}

export default Users_reducer;
