import React from "react";
import {memo, useState, useEffect} from "react";

const HeavyCalculator = (props) => {

    const [liveCount, setLiveCount] = useState(0);

    useEffect ( ()=> {
        props.calculate();
        console.log("calculator is rendered")
    })

    return (
        <>
            <p>Counting up to:</p>
            <h3>{props.count}</h3>
            <button className="btn btn-light" onClick={props.calculate}>Count!</button>
        </>
    )
};

export default memo(HeavyCalculator);