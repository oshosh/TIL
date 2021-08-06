import axios from 'axios';
import React, { useState } from 'react';
import { useAsync } from 'react-async';
import UsersInfo_react_async from './UsersInfo_react_async';

async function getUsers() {
    const respnse = await axios.get('https://jsonplaceholder.typicode.com/users')
    return respnse.data
}

function Users3_react_async() {
    const { data: users, isLoading, error, reload, run } = useAsync({
        deferFn: getUsers
    })
    const response = useAsync({
        deferFn: getUsers
    })

    console.log(response)

    const [userId, setUserId] = useState(null);


    if (isLoading) return <div>로딩중..</div>
    if (error) return <div>에러가 발생했습니다.</div>
    if (!users) return <button onClick={run}>불러오기</button>;

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
            <button onClick={reload}>
                다시 불러오기1
            </button>
            {/* {userId && <UsersInfo id={userId} />} */}
            {userId && <UsersInfo_react_async id={userId} />}

        </>
    );
}

export default Users3_react_async;