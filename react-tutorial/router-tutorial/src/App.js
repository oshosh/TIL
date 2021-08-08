import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './ParameterOrQuery/Profile';

function App() {
  return (
    <div >
      <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/about'>소개</Link>
        </li>
      </ul>
      <hr />
      <Route path='/' component={Home} exact={true}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/profiles/:username' component={Profile} />
    </div>
  );
}

export default App;
