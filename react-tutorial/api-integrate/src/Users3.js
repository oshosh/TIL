import axios from 'axios';
import React, { useState } from 'react';
import useAsync from './useAsync';
import UsersInfo from './UsersInfo';
import UsersInfo_react_async from './UsersInfo_react_async';

async function getUsers() {
    const respnse = await axios.get('https://jsonplaceholder.typicode.com/users')
    return respnse.data
}

function Users3() {
    const [state, refetch] = useAsync(getUsers, [], true)
    const [userId, setUserId] = useState(null);

    const { data: users, loding, error } = state

    if (loding) return <div>로딩중..</div>
    if (error) return <div>에러가 발생했습니다.</div>
    if (!users) return <button onClick={refetch}>불러오기</button>;

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
            <button onClick={refetch}>
                다시 불러오기
            </button>
            {/* {userId && <UsersInfo id={userId} />} */}
            {userId && <UsersInfo_react_async id={userId} />}

        </>
    );
}

export default Users3;