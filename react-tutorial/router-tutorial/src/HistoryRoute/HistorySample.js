import React, { useEffect } from 'react';

function HistorySample({ history }) {
    const goBack = () => {
        history.goBack();
    }
    const goHome = () => {
        history.push('/')
    }
    const repalceToHome = () => {
        history.replace('/')
    }

    useEffect(() => {
        console.log(history)
        const unblock = history.block('정말 떠나실건가요 ?');
        return () => {
            unblock();
        }
    }, [history])

    return (
        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈으로</button>
            <button onClick={repalceToHome}>홈으로 (Replace)</button>
        </div>
    );
}

export default HistorySample;
