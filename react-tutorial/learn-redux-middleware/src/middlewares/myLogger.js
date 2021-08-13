const myLogger = store => next => action => {
    // action dispatch 시..
    console.log(action)

    console.log('\t Prev :', store.getState())
    // action를 다음 미들웨어로 혹은 다음 미들웨어가 없다면 reducer로 전달
    const result = next(action)
    console.log('\t Next :', store.getState()) // action 처리 상태 후 로그

    // container에서 disatch되었을때 반환되는 값
    return result
};

export default myLogger;