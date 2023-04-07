import React from "react";
import {useEffect, useMemo} from "react";
import { countToNumber } from "../utils/utilFunctions";

const MemoCalculator = (props) => {
    
    const count = useMemo(() => {countToNumber(props.count)}, [props.count])
    // const count = countToNumber(props.count);

    useEffect ( ()=> {
        console.log("calculator is rendered")
    })


    return (
        <div className={`calculator bg-${props.color} mb-3`}>
            <p>Counting up to:</p>
            <h3>{props.count}</h3>
        </div>
    )
};

export default MemoCalculator;