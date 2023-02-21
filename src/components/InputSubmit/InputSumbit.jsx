import React, { useState } from 'react';
import useInput from '../../hooks/useInput';
const InputSumbit = () => {
    const [firstname , firstnameBind ] = useInput()
    const [lastname , lastnameBind ] = useInput()
    function submitHandler(e){
        e.preventDefault()
        alert(`Salom ${firstname} ${lastname}`);
    }
    return (
        <div>
            <h1>Input Sumbit</h1>
            <form className='container' action="" onSubmit={submitHandler}>
                <input className='form-control my-1' type="text" {...firstnameBind}  placeholder='Username'/>
                <input className='form-control my-1' type="text" {...lastnameBind}  placeholder='Lastname'/>
                <input className='form-control btn btn-primary'   type="submit" value={"Submit"}/>
            </form>
        </div>
    );
}

export default InputSumbit;
