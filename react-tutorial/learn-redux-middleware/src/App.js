import { Route } from "react-router-dom";
import PostListContainer from "./containers/PostListContainer";
import PostPage from "./pages/PostPage";

function App() {
  // npx json-server ./data.json --port 4000
  // const posts = [
  //   {
  //     id: 1,
  //     title: '리덕스 미들웨어를 배워봅시다',
  //     body: '리덕스 미들웨어를 직접 만들어보면 이해가 쉽다.'
  //   },
  //   {
  //     id: 2,
  //     title: 'redux-thunk를 사용해봅시다.',
  //     body: '비동기 작업이 가능하다.'
  //   },
  //   {
  //     id: 3,
  //     title: 'redux-saga를 사용해봅시다.',
  //     body: '추후에 비동기 작업 처리 할거다.'
  //   },
  // ]

  // console.log(JSON.stringify(posts, null, 2))
  return (
    <>
      <Route path="/" component={PostListContainer} exact />
      <Route path="/:id" component={PostPage} />
    </>
  );
}

export default App;
