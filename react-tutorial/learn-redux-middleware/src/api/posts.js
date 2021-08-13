// const se = n => Promise.resolve((resolve) => {
//     setTimeout(resolve, n)
// })

const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// {id, title, body}
const posts = [
    {
        id: 1,
        title: '리덕스 미들웨어를 배워봅시다',
        body: '리덕스 미들웨어를 직접 만들어보면 이해가 쉽다.'
    },
    {
        id: 2,
        title: 'redux-thunk를 사용해봅시다.',
        body: '비동기 작업이 가능하다.'
    },
    {
        id: 3,
        title: 'redux-saga를 사용해봅시다.',
        body: '추후에 비동기 작업 처리 할거다.'
    },
]

export const getPosts = async () => {
    await sleep(500);
    return posts
}

export const getPostById = async (id) => {
    await sleep(500);
    return posts.find(post => post.id === id);
}