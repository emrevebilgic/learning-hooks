import React from "react";
import { useState, useCallback } from "react";
import HeavyCalculator from "../components/HeavyCalculator";

const CallbackHook = () => {

    const [color, setColor] = useState("primary");
    const [count, setCount] = useState(500000000);

    const calculate = useCallback(() => {
        let num = 0;
        for (let i = 0; i < count; i++) {
            num ++
        }
        console.log("just calculated to "+count)
        return num;
    },[count]);

    return (
        <>
            <p className="explanation">
                <code>useCallback()</code> is ta performance tool. It caches a function so it's not recreated/recalculated unnecesarily at each render. Here is a simple example: <br/>
                We have a <code>&lt;HeavyCalculator/&gt;</code> component wrapped up in a colorful box. It has two props: <code>count</code> and <code>calculate()</code> We want this component re-rendered ONLY these props are changed., not the color... So we use <code>memo()</code> when we are exporting out calculator. So far so good... But it wont't work. Why? <br/>
                Because the <code>calculate()</code> prop is a function. Everytime this page is re-rendered, that functions is recreated. So <code>&lt;HeavyCalculator/&gt;</code> will see that prop as a brand new one, accepted as changed, and will get a re-render.
            </p>
            <div className="d-flex d-grid gap-2 mb-3">
                <button className="btn btn-primary" onClick={()=>{setColor("primary")}}>Primary</button>
                <button className="btn btn-secondary" onClick={()=>{setColor("secondary")}}>Secondary</button>
                <button className="btn btn-danger" onClick={()=>{setColor("danger")}}>Danger</button>
            </div>
            <div className={`calculator bg-${color} mb-3`}> 
                <HeavyCalculator count={count} calculate={calculate}/>
            </div>
            <div className="d-flex d-grid gap-2 mb-3">
                <button className="btn btn-light" onClick={()=>{setCount(500000000)}}>500.000.000</button>
                <button className="btn btn-light" onClick={()=>{setCount(1000000000)}}>1.000.000.000</button>
                <button className="btn btn-light" onClick={()=>{setCount(2000000000)}}>2.000.000.000</button>
            </div>
            <p className="explanation">
                To prevent that, we put the <code>calculate()</code> function into <code>useCallback()</code> hook. The syntax is:<br/>
                <code> const myFunction = useCallback(<var>&lt;function&gt;,&lt;dependencies&gt;</var>)</code><br/>
                <strong>function</strong> is simply the body of our function, and <strong>dependencies</strong> is the array of states and props. <code>useCallback()</code> will monitor these dependencies and recreate the function when any of them are changed.<br/><br/>
                <small>(Performance hooks don't have many use cases, they're not supposed to be all over our code. Many times optimization is possible without these hooks. Definitely check out <a href="https://react.dev/reference/react/useCallback">React Documentation</a> to see details.)</small>
            </p>
        </>
    )
}

export default CallbackHook;