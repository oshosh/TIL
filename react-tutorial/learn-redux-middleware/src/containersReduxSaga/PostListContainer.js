import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../modulesReduxSaga/posts';
import PostList from '../components/PostList'

function PostListContainer() {
    // posts 모듈 안의 init posts 객체
    const { data, loading, error } = useSelector(state => {
        return state.posts.posts
    })

    const dispatch = useDispatch()

    useEffect(() => {
        // 뒤로가기시 refresh 방지
        // if (data) return
        dispatch(getPosts())
    }, [dispatch])


    if (loading && !data) return <div>로딩중...</div>
    if (error) return <div>에러 발생</div>
    if (!data) return null;

    return (
        <PostList posts={data} />
    );
}

export default PostListContainer;