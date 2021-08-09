import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { decrease, increase, setDiff } from '../modules/counter';


function CounterContainer({
    number,
    diff,
    // onIncrease,
    // onDecrease,
    // onSetDiff
    increase,
    decrease,
    setDiff
}) {


    return (
        <Counter
            number={number}
            diff={diff}
            // onIncrease={onIncrease}
            // onDecrease={onDecrease}
            // onSetDiff={onSetDiff}
            onIncrease={increase}
            onDecrease={decrease}
            onSetDiff={setDiff}
        />
    );
}
const mapStateToProps = (state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
})

//bindActionCreators 가 객체면 bindActionCreators 을 쓸필요없음
const mapDispatchToPros = dispatch => bindActionCreators({
    increase,
    decrease,
    setDiff
}, dispatch)

// const mapDispatchToPros = dispatch => ({
//     onIncrease: () => dispatch(increase()),
//     onDecrease: () => dispatch(decrease()),
//     onSetDiff: (diff) => dispatch(setDiff(diff))
// })


// const enhance = connect(mapStateToProps, mapDispatchToPros )
// export default enhance(CounterContainer)

export default connect(mapStateToProps, mapDispatchToPros)(CounterContainer);