import axios from 'axios';
import React, { useReducer, useEffect, useState } from 'react';
import { useAsync } from 'react-async'
import UserInfo_async from './UserInfo_async';

async function getUsers() {
    const respnse = await axios.get('https://jsonplaceholder.typicode.com/users')
    return respnse.data
}

function Users_async() {

    const apiData = useAsync({ promiseFn: getUsers })

    const { data, isLoading, error, reload } = apiData
    const [userId, setUserId] = useState(null)

    if (isLoading) return <div>로딩 중 입니다...</div>
    if (error) return <div>에러!</div>
    if (!data) return null;

    return (
        <>
            <ul>
                {
                    data.map(user =>
                        <li key={user.id} onClick={() => setUserId(user.id)}>
                            {user.username} ({user.name})
                        </li>
                    )
                }
            </ul>
            <button onClick={reload}>
                다시 불러오기
            </button>
            {userId && <UserInfo_async id={userId} />}
        </>
    );
}

export default Users_async;
