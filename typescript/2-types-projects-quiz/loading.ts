{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState2(resource: ResourceLoadState) {
    if (resource.state === 'loading') {
      console.log(`👀 ${resource.state}`)
    } else if (resource.state === 'success') {
      console.log(`😃 ${resource.response.body}`)
    } else {
      console.log(`😱 ${resource.reason}`)
    }
  }

  printLoginState2({ state: 'loading' }); // 👀 loading...
  printLoginState2({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState2({ state: 'fail', reason: 'no network' }); // 😱 no network
}
