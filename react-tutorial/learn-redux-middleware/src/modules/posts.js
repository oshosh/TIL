import * as postsAPI from '../api/posts'
import { reducerUtils } from '../lib/asyncUtils';

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSETS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCES = 'GET_POST_SUCCES';
const GET_POST_ERROR = 'GET_POST_ERROR';

export const getPosts = () => async (dispatch, getState) => {
    // 요청이 시작됨
    dispatch({ type: GET_POSTS })
    // API 를 호출
    try {
        const posts = await postsAPI.getPosts()
        // 성공했을 떄
        dispatch({
            type: GET_POSTS_SUCCESS,
            posts
        })
    } catch (e) {
        // 실패 했을때    
        dispatch({
            type: GET_POSTS_ERROR,
            e
        })
    }
}

export const getPost = (id) => async (dispatch, getState) => {
    // 요청이 시작됨
    dispatch({ type: GET_POST })
    // API 를 호출
    try {
        const posts = await postsAPI.getPost(id)
        // 성공했을 떄
        dispatch({
            type: GET_POST_SUCCES,
            posts
        })
    } catch (e) {
        // 실패 했을때    
        dispatch({
            type: GET_POST_ERROR,
            e
        })
    }
}

const initialState = {
    posts: reducerUtils.initial(),
    post: reducerUtils.initial()
}

export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: reducerUtils.loading() //reducerUtils.loading(state.posts.data) 기존 state data 유지
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: reducerUtils.success(state.posts)
            }
        case GET_POSTS_ERROR:
            return {
                ...state,
                posts: reducerUtils.error(action.error)
            }
        case GET_POST:
            return {
                ...state,
                post: reducerUtils.loading()
            }
        case GET_POST_SUCCES:
            return {
                ...state,
                post: reducerUtils.success(state.post)
            }
        case GET_POST_ERROR:
            return {
                ...state,
                post: {
                    ...state,
                    posts: reducerUtils.error(action.error)
                }
            }
        default:
            return state;
    }
}