import React, { useEffect, useState } from 'react';
import { getUser, useUsersDispatch, useUsersState } from './UsersContext';

function UserInfo_context({ id }) {

    const state = useUsersState()
    const dispatch = useUsersDispatch()

    useEffect(() => {
        getUser(dispatch, id)
    }, [id])

    const { data: user, loding, error } = state.user
    if (error) return <>에러</>
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

export default UserInfo_context;