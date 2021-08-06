import React, { useState } from 'react';
import { getUsers, useUsersDispatch, useUsersState } from '../UsersContext2';
import UsersInfo_contextapi from './UsersInfo_contextapi';

function Users_contextapi() {
    const [userId, setUserId] = useState(null);
    const state = useUsersState();
    const dispatch = useUsersDispatch()

    const { loding, data: users, error } = state.users;

    const fetchData = () => {
        getUsers(dispatch)
    }
    if (loding) return <div>로딩중..</div>
    if (error) return <div>에러가 발생했습니다.</div>
    if (!users) return <button onClick={fetchData}>불러오기</button>;

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
                다시 불러오기1
            </button>
            {userId && <UsersInfo_contextapi id={userId} />}
        </>
    );
}

export default Users_contextapi;