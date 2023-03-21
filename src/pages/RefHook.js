import React from "react";
import { useState, forwardRef, useRef } from 'react';

const RefHook = () => {

    const logRef = useRef(0);
    const divRef = useRef(null);
    const divRef2 = useRef(null);
    const inputRef = useRef(null);

    const MyCustomInput = forwardRef((props,ref) => {
        return (
            <input className="w-100 mb-3" ref={ref} placeholder="My Custom Input..." />
        )
    })

    function handleLogClick() {
        logRef.current = logRef.current + 1;
        console.log('You clicked ' + logRef.current + ' times!');
    }
    
    function handleInputFocus(ref) {
        ref.current.focus();
    }

    function handleDivScroll(ref) {
        ref.current.scrollIntoView();
    }

    return (
        <>
        <p className="explanation">
            <code>useRef()</code> simply creates <strong>a Ref,</strong> which is a persisting value between renders. It's not a state, meaning its update won't cause a render. It's not a basic variable, meaning a re-render won't reset its value. <br/>
            A ref is an object with only one attribute in it: <code>&#123;current&#125;</code>, meaning we can read the latest value in a ref by calling <code>ref.current</code>.<br/> First example: We'll increment a value without triggering any renders: <br/> <small>(Watch the console.)</small>
        </p>
        <button className="btn btn-primary mb-3" onClick={()=>handleLogClick()}>Log!</button>

        <p className="mt-3 explanation">
            Another use of ref is to directly touch the DOM elements. Well, useally we want React handle the elements. However, there are some cases we might want to effect the DOM directly. That's when wee use <code>useRef().</code> For instance, when we want to scroll to a certain element:
        </p>

        <div className="ref-container">
            <div className="ref-child" style={{height: 300}} ref={divRef}>
                <button className="btn btn-primary" onClick={()=> handleDivScroll(divRef2)}>Down!</button>
            </div>
            <div className="ref-child" ref={divRef2}>
                <button className="btn btn-primary" onClick={()=> handleDivScroll(divRef)}>Up!</button>
            </div>
        </div>

        <p className="mt-3 explanation">
            Unlike DOM elements, your custom components does not have <code>ref</code> attribute. However, you can still access them directly if you use <strong><code>forwardRef():</code></strong>
        </p>
        <MyCustomInput ref={inputRef} />
        <button className="btn btn-primary mb-3" onClick={()=>handleInputFocus(inputRef)}>Focus to the input!</button>
        </>
    )
}

export default RefHook;