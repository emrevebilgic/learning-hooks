import React from "react";
import { useState, forwardRef, useRef } from 'react';

const RefHook = () => {

    const logRef = useRef(0);
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);

    const MyCustomInput = forwardRef((props,ref) => {
        return (
            <input className="w-100 mb-3" ref={ref} />
        )
    })

    function handleLogClick() {
        logRef.current = logRef.current + 1;
        console.log('You clicked ' + logRef.current + ' times!');
    }
    
    function handleInputFocus(ref) {
        ref.current.focus();
    }

    return (
        <>
        <p>
            <strong>A Ref</strong> is a persisting value between renders. It's not a state, meaning its update won't cause a render. It's not a basic variable, meaning a re-render won't reset its value. It's an object, and we can read the latest value in a ref by calling <strong>ref.current</strong>... Watch the console:
        </p>
        <button className="btn btn-primary mb-3" onClick={()=>handleLogClick()}>Log!</button>

        <p>
            Another use of ref is to directly touch the DOM elements. Let's try it on an input:
        </p>
        <input className="w-100 mb-3" ref={inputRef} />
        <button className="btn btn-primary mb-3" onClick={()=>handleInputFocus(inputRef)}>Focus</button>

        <p>
            You can use ref in your custom components also, if you use <strong>forwardRef:</strong>
        </p>
        <MyCustomInput ref={inputRef2} />
        <button className="btn btn-primary mb-3" onClick={()=>handleInputFocus(inputRef2)}>Focus</button>
        </>
    )
}

export default RefHook;