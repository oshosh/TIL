import { Route } from "react-router-dom";
import PostListContainer from "./containersReduxSaga/PostListContainer";
import PostPage from "./pagesReduxSaga/PostPage";
import CounterContainer from './containersReduxSaga/CounterContainer'
function App() {
  return (
    <>
      <CounterContainer />
      <Route path="/" component={PostListContainer} exact />
      <Route path="/:id" component={PostPage} />
    </>
  );
}

export default App;
