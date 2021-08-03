import React from 'react';
import classNames from 'classnames';
import './Button.scss';

// size : large, medium, small
// color : blue, pink, gray
function Button({ children, size, color, outline, fullWidth, className, ...rest }) {
    // 조건부로 넘어가는 classname props는 객체로 감싼다.
    return (
        <button
            className={classNames('Button', size, color, { outline, fullWidth }, className)}
            {...rest}
        >
            {children}
        </button>
    )
}

Button.defaultPros = {
    size: 'medium',
    color: 'blue'
}

export default Button;