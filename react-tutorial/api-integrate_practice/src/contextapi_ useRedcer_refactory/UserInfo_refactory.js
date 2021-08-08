import React, { useEffect } from 'react';
import { getUser, useUsersDispatch, useUsersState } from './UsersContext_reactory';

function UserInfo_refactory({ id }) {

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

export default UserInfo_refactory;