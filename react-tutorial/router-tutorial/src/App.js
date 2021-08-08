import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import HistorySample from './HistoryRoute/HistorySample';
import About from './ParameterOrQuery/About';
import Home from './ParameterOrQuery/Home';
// import Profile from './ParameterOrQuery/Profile';
import Profiles from './ParameterOrQuery/Profiles';

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
        <li>
          <Link to='/profiles'>프로필 목록</Link>
        </li>
        <li>
          <Link to='/history'>예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path='/' component={Home} exact={true}></Route>
        <Route path='/about' component={About}></Route>
        {/* <Route path='/profiles/:username' component={Profile} /> */}
        <Route path='/profiles' component={Profiles} />
        <Route path='/history' component={HistorySample} />
        <Route
          render={
            ({ location }) =>
              <div>
                <h2>
                  이 페이지는 존재하지 않습니다.
                </h2>
                <p>{location.pathname}</p>
              </div>}
        />
      </Switch>
    </div>
  );
}

export default App;
