import React from "react";
import { Routes, Link, Outlet, Route, useParams } from "react-router-dom";
import About from "./About";
import UserMain from "./UserMain";

function User() {
    // useRouteMatch 사라지면서 상대 경로가 사용 가능해짐
    // const match = useRouteMatch();

    const { username } = useParams(); // osh
    return (
        <div>
            <div>
                {/* ""를 넣어서 상대 경로 적용 */}
                <Link to="" style={{ marginRight: 16 }}>
                    @{username}
                </Link>
                {/* /를 붙이치 않고 사용해야 지금 상대 경로의 about으로 갈수 있음  */}
                <Link to="about">About</Link>
            </div>

            {/* 서브라우터 방법 1 */}
            {/* Route는 Routes의 직속 자식으로 설정해야함 */}
            {/* Route에 exact Prop 사라짐 -> 서브 경로가 필요한 경우 path에 * 사용 */}
            <Routes>
                <Route path="" element={<UserMain />} />
                <Route path="about" element={<About />} />
            </Routes>

            {/* 서브라우터 방법 2 */}
            <Outlet />
        </div>
    );
}

export default User;
