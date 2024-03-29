import * as postsAPI from '../api/posts'
import { cratePromsieThunk, cratePromsieThunkId, handleAsyncActions, handleAsyncActionsById, reducerUtils } from '../lib/asyncUtils';

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

const CLEAR_POST = 'CLEAR_POST'

export const getPosts = cratePromsieThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = cratePromsieThunkId(GET_POST, postsAPI.getPostById);
export const clearPost = () => ({ type: CLEAR_POST })

export const goToHome = () => (dispatch, getState, { history }) => {
    history.push('/')
}
const initialState = {
    posts: reducerUtils.initial(),
    post: reducerUtils.initial()
}

const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts', true)
const getPostReducer = handleAsyncActionsById(GET_POST, 'post', true)

export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return getPostsReducer(state, action)

        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return getPostReducer(state, action)

        case CLEAR_POST:
            return {
                ...state,
                post: reducerUtils.initial()
            }
        default:
            return state;
    }
}