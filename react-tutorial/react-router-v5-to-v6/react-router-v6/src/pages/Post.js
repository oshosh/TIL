import React from 'react';
import { useNavigate, useParams } from 'react-router';

function Post() {
    const { id } = useParams();
    // useHistory -> useNavigate
    // const history = useHistory();
    const navigate = useNavigate()

    return (
        <div>
            <button
                onClick={() => {
                    // history.push('/')
                    navigate('/')
                }}
            >
                Home
            </button>

            <button
                onClick={() => {
                    // history.goBack()
                    navigate(-1)
                }}
            >
                Go Back
            </button>

            <button
                onClick={() => {
                    // history.go(-2)
                    navigate(-2)
                }}
            >
                Go Back Twice
            </button>

            <div>Post {id}</div>

            <button onClick={
                () => navigate(`/posts/${parseInt(id, 10) + 1}`)}>
                Next Post
            </button>
            {/* <button onClick={
                () => history.push(`/posts/${parseInt(id, 10) + 1}`)}>
                Next Post
            </button> */}
        </div>
    );
}

export default Post;