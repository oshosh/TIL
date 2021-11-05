import React from "react";
import { Route, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import About from "./About";
import UserMain from "./UserMain";

function User() {
    // isExact: true
    // params: {username: 'osh'}
    // path: "/users/:username"
    // url: "/users/osh"
    const match = useRouteMatch();
    const { username } = useParams(); // osh
    return (
        <div>
            <div>
                <Link to={`${match.url}`} style={{ marginRight: 16 }}>
                    @{username}
                </Link>
                <Link to={`${match.url}/about`}>About</Link>
            </div>

            {/* 서브라우터 */}
            <Route path={`${match.path}`} exact>
                <UserMain />
            </Route>
            <Route path={`${match.path}/about`}>
                <About />
            </Route>
        </div>
    );
}

export default User;
