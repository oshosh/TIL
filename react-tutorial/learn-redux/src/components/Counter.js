import React from 'react';

// 프리젠테이셔널 컴포넌트
function counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
    const onChange = e => {
        onSetDiff(parseInt(e.target.value, 10));
    }
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input type="number" value={diff} onChange={onChange}></input>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}

export default counter;