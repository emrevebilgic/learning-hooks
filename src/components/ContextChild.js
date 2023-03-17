import React from "react";
import { useContext } from "react";
import { SomeContext } from "../pages/ContextHook";

const Child1 = () => {
    return (
        <Child2 />
    )
}

const Child2 = () => {
    return (
        <ContextChild />
    )
}

const ContextChild = () => {
    
    const setContextCount = useContext(SomeContext);
    
    return (
        <>
            <button className="btn btn-primary" onClick={()=> setContextCount( (c)=>c+1) }>Add 1</button>
        </>
    )
}

export default Child1;