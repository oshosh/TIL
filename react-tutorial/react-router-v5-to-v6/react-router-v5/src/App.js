import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import User from "./pages/User/User";
import Optional from "./pages/Optional";

function App() {
  // 라우터 정의
  return (
    <Switch>
      <Route path="/" exact>
        {/* 라우터 설정 */}
        <Home />
      </Route>
      <Route path="/posts/:id">
        <Post />
      </Route>
      <Route path="/users/:username">
        <User />
      </Route>
      <Route path="/optional/:value?">
        <Optional />
      </Route>
    </Switch>
  );
}

export default App;