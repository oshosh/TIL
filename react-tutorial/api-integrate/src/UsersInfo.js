import axios from 'axios';
import React from 'react';
import useAsync from './useAsync';

async function getUser(id) {
    const respnse = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return respnse.data
}

function UsersInfo({ id }) {
    const [state] = useAsync(() => getUser(id), [id])

    const { data: user, loding, error } = state

    if (loding) return <div>로딩중..</div>
    if (error) return <div>에러가 발생했습니다.</div>
    if (!user) return null;

    return (
        <>
            <h2>{user.username}</h2>
            <p>
                <b>email: </b>{user.email}
            </p>
        </>
    );
}

export default UsersInfo;