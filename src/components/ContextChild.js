import React from "react";
import { useContext } from "react";
import { SomeContext } from "../pages/ContextHook";

const Child1 = () => {
    return (
        <div className="context-child">
            <Child2 />
        </div>
    )
}

const Child2 = () => {
    return (
        <div className="context-child">
            <ContextChild />
        </div>
    )
}

const ContextChild = () => {
    
    const setContextCount = useContext(SomeContext);
    
    return (
        <div className="context-child">
            <button className="btn btn-primary" onClick={()=> setContextCount( (c)=>c+1) }>Add 1</button>
        </div>
    )
}

export default Child1;