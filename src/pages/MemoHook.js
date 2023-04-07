import React from "react";
import { useState, useMemo } from "react";
import MemoCalculator from "../components/MemoCalculator";
import { countToNumber } from "../utils/utilFunctions";

const MemoHook = () => {

    const [color, setColor] = useState("primary");
    const [count, setCount] = useState(500000000);

    // const statelessCount = countToNumber(count);
    const statelessCount = useMemo(() => {countToNumber(count)}, [count]);

    return (
        <>
            <p className="explanation">
                <code>useMemo()</code> is ta performance tool. It prevents a value from being recreated/rerun on each render. Here is a simple example:<br/>
                We have a <code>&lt;MemoCalculator /&gt;</code> component and inside there is a variable calculated by an expensive function. Even if we don't change the anyting related to the variable, every render will cause a re-calculation of it. In this example, change of numbers should effect the variable, but change of colors should not.
            </p>
            <div className="d-flex d-grid gap-2 mb-3">
                <button className="btn btn-primary" onClick={()=>{setColor("primary")}}>Primary</button>
                <button className="btn btn-secondary" onClick={()=>{setColor("secondary")}}>Secondary</button>
                <button className="btn btn-danger" onClick={()=>{setColor("danger")}}>Danger</button>
            </div>
            <MemoCalculator color={color} count={count} varCount={statelessCount}/>
            <div className="d-flex d-grid gap-2 mb-3">
                <button className="btn btn-light" onClick={()=>{setCount(500000000)}}>500.000.000</button>
                <button className="btn btn-light" onClick={()=>{setCount(1000000000)}}>1.000.000.000</button>
                <button className="btn btn-light" onClick={()=>{setCount(2000000000)}}>2.000.000.000</button>
            </div>
            <p className="explanation">
                That's why we calculate the cariable inside the <code>useMemo()</code> hook. The syntax is:<br/>
                <code>const myValue = useMemo(<var>&lt;calculatingFunc()&gt;,&lt;dependencies&gt;</var>)</code><br/>
                <strong>The function</strong> is simply whatever determining our variable's value. <strong>Dependencies</strong> is the array of states and props that are watched by the hook.
            </p>

            <p className="explanation">
                If you check the console, you'll see the counter wokrs <strong>twice</strong> on the state change. The second run is about our other use case: <strong>Skipping re-renders.</strong><br/>
                We have another <code>useMemo()</code> planted in the calculator's parent component. The parent passes a variable to calculator, which is again calculated by an expensive function. Everytime the parent gets a re-render, this variable is recreated. To optimize this, we wrap the function calculating our variable inside a <code>useMemo()</code> hook. With this, no color change can effect out calculator. <br/>
                <small>(Performance hooks don't have many use cases, they're not supposed to be all over our code. Many times optimization is possible without these hooks. Definitely check out <a href="https://react.dev/reference/react/useMemo">React Documentation</a> to see details.)</small>
            </p>

        </>
    )
}

export default MemoHook;