import React from 'react';

import classes from './Counter.module.scss';

const Counter = () => {
    const [counter, setCounter] = React.useState(0);

    const increment = () => {
        setCounter((prev) => prev + 1);
    };

    return (
        <div className={classes.button}>
            <h1>{counter}</h1>

            <button onClick={increment}>increment</button>
        </div>
    );
};

export default Counter;
