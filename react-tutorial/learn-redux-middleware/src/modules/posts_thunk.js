import * as postsAPI from '../api/posts'
import { cratePromsieThunk, handleAsyncActions, reducerUtils } from '../lib/asyncUtils';

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

const CLEAR_POST = 'CLEAR_POST'

export const getPosts = cratePromsieThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = cratePromsieThunk(GET_POST, postsAPI.getPostById);
export const clearPost = () => ({ type: CLEAR_POST })
// export const getPosts = () => async (dispatch, getState) => {
//     // 요청이 시작됨
//     dispatch({ type: GET_POSTS })
//     // API 를 호출
//     try {
//         const posts = await postsAPI.getPosts()
//         // 성공했을 떄
//         dispatch({
//             type: GET_POSTS_SUCCESS,
//             posts
//         })
//     } catch (e) {
//         // 실패 했을때    
//         dispatch({
//             type: GET_POSTS_ERROR,
//             e
//         })
//     }
// }

// export const getPost = (id) => async (dispatch, getState) => {
//     // 요청이 시작됨
//     dispatch({ type: GET_POST })
//     // API 를 호출
//     try {
//         const posts = await postsAPI.getPostById(id)
//         // 성공했을 떄
//         dispatch({
//             type: GET_POST_SUCCES,
//             posts
//         })
//     } catch (e) {
//         // 실패 했을때    
//         dispatch({
//             type: GET_POST_ERROR,
//             e
//         })
//     }
// }

const initialState = {
    posts: reducerUtils.initial(),
    post: reducerUtils.initial()
}

const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts', true)
const getPostReducer = handleAsyncActions(GET_POST, 'post')

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

// export default function posts(state = initialState, action) {
//     switch (action.type) {
//         case GET_POSTS:
//             return {
//                 ...state,
//                 posts: reducerUtils.loading() //reducerUtils.loading(state.posts.data) 기존 state data 유지
//             }
//         case GET_POSTS_SUCCESS:
//             return {
//                 ...state,
//                 posts: reducerUtils.success(state.posts)
//             }
//         case GET_POSTS_ERROR:
//             return {
//                 ...state,
//                 posts: reducerUtils.error(action.error)
//             }
//         case GET_POST:
//             return {
//                 ...state,
//                 post: reducerUtils.loading()
//             }
//         case GET_POST_SUCCES:
//             return {
//                 ...state,
//                 post: reducerUtils.success(state.post)
//             }
//         case GET_POST_ERROR:
//             return {
//                 ...state,
//                 post: {
//                     ...state,
//                     posts: reducerUtils.error(action.error)
//                 }
//             }
//         default:
//             return state;
//     }
// }