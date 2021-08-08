import React from 'react';
import WithRouterSample from '../WithRouter/WithRouterSample';

const profileData = {
    user: {
        name: '흔한개발자',
        description: 'frontend enginner'
    },
    homer: {
        name: '호머 심슨',
        description: '만화 캐릭터'
    }
}

function Profile({ match }) {
    const { username } = match.params;
    const profile = profileData[username];

    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>
    }
    return (
        <div>
            <h3>{username}({profile.name})</h3>
            <p>
                {profile.description}
            </p>

            <WithRouterSample />
        </div>
    );
}

export default Profile;