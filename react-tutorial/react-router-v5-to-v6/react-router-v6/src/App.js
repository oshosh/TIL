import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import User from "./pages/User/User";
import Optional from "./pages/Optional";
import UserMain from "./pages/User/UserMain";
import About from "./pages/User/About";

function App() {
  // 라우터 정의
  // Switch -> Routes
  //Route에 childeren이나 component 대신에 element 사용
  return (
    <Routes>
      {/* 라우터 설정 */}
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={<Post />} />
      <Route path="/users/:username/*" element={<User />}>
        <Route path="" element={<UserMain />} />
        <Route path="about" element={<About />} />
      </Route>
      {/* Optional URL 파라미터 사라짐 필요하면 Route 2개 만들어야함 */}
      <Route path="/optional/:value" element={<Optional />} />
      <Route path="/optional" element={<Optional />} />
    </Routes>
  );
}

export default App;

