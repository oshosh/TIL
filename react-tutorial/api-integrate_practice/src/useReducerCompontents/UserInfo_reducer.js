import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserInfo_reducer({ id }) {
    const [userInfo, setUserInfo] = useState(null)


    useEffect(() => {
        async function getUsersAPI() {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                setUserInfo(response)

            } catch (e) {

            }
        }
        getUsersAPI()
    }, [id])


    if (!userInfo) return null;

    const { data } = userInfo

    return (
        <>
            <h2>{data.username}</h2>
            <p>
                <b>email: </b>{data.email}
            </p>
        </>
    );
}

export default UserInfo_reducer;