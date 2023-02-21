import React, { useState } from 'react';

const UseInput = (initial = 0) => {
    const [value, setValue] = useState(initial)

    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value)
        }
    }

    return [value , bind]
}

export default UseInput;
