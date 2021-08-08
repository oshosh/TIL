import React from 'react';
import Profile from './Profile';
import { NavLink, Route } from 'react-router-dom';
import WithRouterSample from '../WithRouter/WithRouterSample';
import RouterHookSample from '../UseReactRouterHook/RouterHookSample';


function Profiles() {
    return (
        <div>
            <h3>사용자목록</h3>
            <ul>
                <li><NavLink
                    to="/profiles/user"
                    activeStyle={{ background: 'black', color: 'white' }}
                >흔한개발자</NavLink></li>
                <li><NavLink to="/profiles/homer">Homer</NavLink></li>
            </ul>

            <Route
                path='/profiles'
                exact
                render={
                    // {match , location} 사용 가능
                    () =>
                        <div>
                            사용자를 선택해주세요.
                        </div>
                } />
            <Route path="/profiles/:username" component={Profile} />
            <RouterHookSample />
        </div>
    );
}

export default Profiles;