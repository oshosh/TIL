import axios from 'axios';
import React, { useState, useEffect, useReducer } from 'react';


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

function Users_useReducer() {

    const [state, dispatch] = useReducer(reducer, {
        data: null,
        loding: false,
        error: null
    })

    const fetchUsers = async () => {
        dispatch({ type: "LOADING" })
        try {
            const respnse = await axios.get('https://jsonplaceholder.typicode.com/users')

            dispatch({ type: "SUCCESS", data: respnse.data })
        } catch (e) {
            dispatch({ type: "ERROR", error: e })
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const { data: users, loding, error } = state
    if (loding) return <div>로딩중..</div>
    if (error) return <div>에러가 발생했습니다.</div>
    if (!users) return null;

    return (
        <>
            <ul>
                {
                    users.map(user =>
                        <li key={user.id}>
                            {user.username} ({user.name})
                        </li>
                    )
                }
            </ul>
            <button onClick={fetchUsers}>
                다시 불러오기
            </button>
        </>
    );
}

export default Users_useReducer;