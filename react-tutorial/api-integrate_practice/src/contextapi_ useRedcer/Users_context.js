import React, { useEffect, useState } from 'react';
import UserInfo_context from './UserInfo_context';
import { getUsers, useUsersDispatch, useUsersState } from './UsersContext';


function Users_context() {

    const state = useUsersState()
    const dispatch = useUsersDispatch()
    const [userId, setUserId] = useState(null)

    const fetchData = () => {
        getUsers(dispatch)
    }

    useEffect(() => {
        getUsers(dispatch)
    }, [])

    const { loading, data: usersItem, error } = state.users

    if (loading) return <div>로딩 중 입니다...</div>
    if (error) return <div>에러!</div>
    if (!usersItem) return null;
    return (
        <>
            <ul>
                {
                    usersItem.map(user =>
                        <li key={user.id} onClick={() => setUserId(user.id)}>
                            {user.username} ({user.name})
                        </li>
                    )
                }
            </ul>
            <button onClick={fetchData}>
                다시 불러오기
            </button>
            {userId && <UserInfo_context id={userId} />}
        </>
    );
}

export default Users_context;
