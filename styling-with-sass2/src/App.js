import { useState } from "react";
import "./App.scss";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";

function App() {
  const [check, setCheck] = useState(false);
  const onChange = (e) => setCheck(e.target.checked);
  return (
    <div className="App">
      <div>
        <CheckBox onChange={onChange} checked={check}>
          다음 약관에 모두 동의
        </CheckBox>
      </div>

      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button>BUTTON</Button>
        <Button size="small">BUTTON</Button>
      </div>

      <div className="buttons">
        <Button color="gray" size="large">
          BUTTON
        </Button>
        <Button color="gray">BUTTON</Button>
        <Button color="gray" size="small">
          BUTTON
        </Button>
      </div>

      <div className="buttons">
        <Button color="pink" size="large">
          BUTTON
        </Button>
        <Button color="pink">BUTTON</Button>
        <Button color="pink" size="small">
          BUTTON
        </Button>
      </div>

      <div className="buttons">
        <Button size="large" outline>
          BUTTON
        </Button>
        <Button color="gray" outline>
          BUTTON
        </Button>
        <Button color="pink" size="small" outline>
          BUTTON
        </Button>
      </div>

      <div className="buttons">
        <Button size="large" fullWidth>
          BUTTON
        </Button>
        <Button
          size="large"
          color="gray"
          fullWidth
          onClick={() => console.log("클릭")}
        >
          BUTTON
        </Button>
        <Button
          color="pink"
          size="large"
          fullWidth
          onMouseMove={() => console.log("마우스 무브")}
        >
          BUTTON
        </Button>
      </div>
    </div>
  );
}

export default App;
