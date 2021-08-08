import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter, MemoryRouter } from 'react-router-dom'

// HashRouter 주소 뒤에 /#/ 이 붙음 - 구형 브라우저에서도 사용이 가능
// MemoryRouter 가상의 주소가 리 렌더됨 (새로고침은 안됨)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
