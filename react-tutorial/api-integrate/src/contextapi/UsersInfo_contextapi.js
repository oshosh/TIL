import React, { useEffect } from 'react';
import { getUser, useUsersDispatch, useUsersState } from '../UsersContext2';



function UsersInfo_contextapi({ id }) {
    const state = useUsersState()
    const dispatch = useUsersDispatch()



    useEffect(() => {
        getUser(dispatch, id)
    }, [dispatch, id])

    const {
        user: { loding, data: user, error }
    } = state

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

export default UsersInfo_contextapi;