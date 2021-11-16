{
    // function: login -> success, fail ⏱
    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        };
    };
    type FailState = {
        result: 'fail';
        reason: string;
    };
    type LoginState = SuccessState | FailState;

    function login(): LoginState {
        return {
            result: 'success',
            response: {
                body: 'logged in!',
            },
        };
    }

    printLoginState({ result: 'success', response: { body: '넌 성공' } })
    printLoginState({ result: 'fail', reason: '실패 이유는 없다..' })

    // printLoginState(state: LoginState)
    // success -> 🎉 body
    // fail -> 😭 reason
    function printLoginState(state: LoginState) {
        if (state.result === 'success') {
            console.log(`🎉 ${state.response.body}`);
        } else {
            console.log(`😭 ${state.reason}`);
        }
    }
}