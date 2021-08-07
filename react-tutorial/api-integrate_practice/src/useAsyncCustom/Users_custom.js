import axios from 'axios';
import React, { useReducer, useEffect, useState } from 'react';
import { useAsync } from '../useAsyncCustom/CutomUseAsync';
import UserInfo_custom from './UserInfo_custom';


async function getUsers() {
    const respnse = await axios.get('https://jsonplaceholder.typicode.com/users')
    return respnse.data
}

function Users_custom() {

    const [state, fetchData] = useAsync(getUsers, [])
    const [userId, setUserId] = useState(null)

    const { data: users, loading, error } = state

    if (loading) return <div>로딩 중 입니다...</div>
    if (error) return <div>에러!</div>
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
            <button onClick={fetchData}>
                다시 불러오기
            </button>
            {userId && <UserInfo_custom id={userId} />}
        </>
    );
}

export default Users_custom;
