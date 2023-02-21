import React from 'react';
import UseCounter from '../../hooks/useCounter';
import classes from './Counter.module.scss'
const Counter = () => {
   const {count , decr , incr , reset} =  UseCounter(10)
    return (
        <div>
            <h1>Count :{count} </h1>
            <button className={classes["btn"]} onClick={incr}>Increment</button>
            <button className={classes["btn"]} onClick={decr}>Decrement</button>
            <button className={classes["btn"]} onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;
