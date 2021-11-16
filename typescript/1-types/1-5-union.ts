{
  /**
   *  Union Types: OR
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail ⏱
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  printLoginState({ response: { body: 'true' } })
  printLoginState({ reason: 'fail' })

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }


  type S = {
    res: {
      body: string
    }
  };
  type F = {
    q: string
  };

  type SF = S | F

  function test(): SF {
    return {
      res: {
        body: 'hi'
      }
    }
  }

  function pr(state: SF) {
    if ('res' in state) {
      console.log(state.res.body)
    } else {
      console.log(state.q)
    }
  }
  console.log(test())
  pr({ q: 'ㅎㅎㅎ' })
  pr({ res: { body: 'ssssssssssssssss' } })
}

