import React, { useEffect, useState } from 'react';
import UserInfo_refactory from './UserInfo_refactory';
import { getUsers, useUsersDispatch, useUsersState } from './UsersContext_reactory';


function Users_context_refactory() {

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
            {userId && <UserInfo_refactory id={userId} />}
        </>
    );
}

export default Users_context_refactory;
