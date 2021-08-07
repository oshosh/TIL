import axios from 'axios';
import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo';


function Users() {
    const [users, setUsers] = useState(null)
    const [loding, setLoding] = useState(false)
    const [error, setError] = useState(false)


    const [userId, setUserId] = useState(null)

    const fetchUsers = async () => {
        try {
            setUsers(null)
            setError(null);
            setLoding(true)

            const respnse = await axios.get('https://jsonplaceholder.typicode.com/users')

            setUsers(respnse)
        } catch (e) {
            setError(e)
        }
        setLoding(false)
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loding) return <div>로딩중..</div>
    if (error) return <div>에러가 발생했습니다.</div>
    if (!users) return null;

    return (
        <>
            <ul>
                {
                    users.data.map(user =>
                        <li key={user.id} onClick={() => setUserId(user.id)} >
                            {user.username} ({user.name})
                        </li>
                    )
                }
            </ul>
            <button onClick={fetchUsers}>
                다시 불러오기
            </button>
            {userId && <UserInfo id={userId} />}
        </>
    );
}

export default Users;