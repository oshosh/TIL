import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAsync } from './CutomUseAsync';

function UserInfo_custom({ id }) {


    const getUsersAPI = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            return response.data
        } catch (e) {

        }
    }

    const [state, fetchData] = useAsync(() => getUsersAPI(id), [id])

    const { data: user, loding, error } = state


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

export default UserInfo_custom;