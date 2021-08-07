import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';


async function getUserInfoAPI({ id, ...rest }) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    return response.data
}

function UserInfo_async({ id }) {
    const { data: user, isLoading, error } = useAsync({
        promiseFn: getUserInfoAPI,
        id,
        'asdf': 'asdfasdf',
        watch: id
    })

    if (isLoading) return <div>로딩중..</div>
    if (error) return <div>에러가 발생했습니다.</div>
    if (!user) {
        return null;
    }

    return (
        <>
            <h2>{user.username}</h2>
            <p>
                <b>email: </b>{user.email}
            </p>
        </>
    );
}

export default UserInfo_async;