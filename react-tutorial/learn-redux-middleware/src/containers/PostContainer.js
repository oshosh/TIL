import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Post from '../components/Post';
import { reducerUtils } from '../lib/asyncUtils';
import { clearPost, getPost, goToHome } from '../modules/posts';

function PostContainer({ postId }) {
    const { data, loading, error } = useSelector(state => state.posts.post[postId] || reducerUtils.initial())
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPost(postId))
        // return () => {
        //     // clean up
        //     dispatch(clearPost())
        // }
    }, [dispatch, postId])

    if (loading && !data) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;
    if (!data) return null;

    return (
        <>
            <button onClick={() => dispatch(goToHome())}>홈으로 이동</button>
            <Post post={data} />
        </>

    );
}

export default PostContainer;