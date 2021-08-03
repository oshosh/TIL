import React, { useState } from 'react';
import CheckBox from './components_checkbox/CheckBox';

function App_checkbox() {
  const [check, setCheck] = useState(false)
  const onChange = (e) => {
    setCheck(e.target.checked)
  }
  return (
    <div className="App">
      <CheckBox
        onChange={onChange}
        checked={check}>
        다음 약관에 모두 동의
      </CheckBox>
    </div>
  );
}

export default App_checkbox;
