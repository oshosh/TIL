import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase, setDiff } from '../modules/counter';


function CounterContainer() {

    // store.getState 처럼 리덕스 현재 상태 조회가 가능함
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }),
        // (left, right) =>
        // {
        //     // 객체 state 조회 일 경우 re-render 방지
        //      return left.diff === right.diff && left.number === right.number;
        //     }

        shallowEqual
    );

    const dispatch = useDispatch();

    // 액션 생성 후 dispatch
    const onIncrease = () => dispatch(increase())
    const onDecrease = () => dispatch(decrease())
    const onSetDiff = diff => dispatch(setDiff(diff))

    return (
        <Counter
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}

export default CounterContainer;