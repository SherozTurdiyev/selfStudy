import React, { useState } from 'react';

const UseCounter = (initial = 0) => {
    const [count , setCount] = useState(initial)
    function decr(){
        setCount(prev => prev -1)
    }
    function incr(){
        setCount(prev => prev +1)
    }
    function reset(){
        setCount(0)
    }

    return {count , decr , incr , reset}
}

export default UseCounter;
