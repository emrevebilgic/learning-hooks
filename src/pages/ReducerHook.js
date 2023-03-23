import React from "react";
import {useState, useReducer, useEffect} from 'react';

const ReducerHook = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD": {
                if( state.some((item)=>item.name === action.name) ) {
                    alert("This customer already exists");
                    return state;
                }
                else
                    return [...state, {name: action.name, phone: action.phone} ]
            }
            case "REMOVE": {
                return state.filter((item)=>item.name !== action.name)
            }
            default:
                return state;
        }
    }

    const [customers, dispatch] = useReducer(reducer, []);

    useEffect(()=> {
        console.log("current customer count: " + customers.length)
    }, [customers])

    function handleName(event) {
        setName(event.target.value)
    }
    
    function handlePhone(event) {
        setPhone(event.target.value)
    }

    function handleAdd(event) {
        dispatch({type: "ADD", name: name, phone: phone});
        event.preventDefault();
    }

    function handleEdit() {
        dispatch({type: "EDIT", name: name, phone: phone})
    }

    function handleRemove(item) {
        dispatch({type: "REMOVE", name: item.name});
    }

    return (
        <>
            <p className="explanation">
                <code>useReducer()</code> is the perfect tool for complex state management.<br/> Let's say we have a state that can be changed in many ways: Adding, removing elements, changing elements' content, reversing the order of them etc. <code>useState()</code> is a weak solution because for all the different needs, I have only one <code>setState</code> and each time I have to create a different function ending with a <code>setState().</code> Instead, We will only have one function and it will <strong> <code>dispatch</code> actions</strong> for our different needs.
                <br/><br/>
                Here is <code>useReducer</code>'s structure: <br/> <code>useReducer(<var>&lt;reducer&gt;,&lt;initState&gt;,&lt;initFunc?&gt;</var>)</code> <br/> <br/>
                <strong>Reducer</strong> is the function that will dispatch the actions. <strong>State</strong> will be the first value of our state. <strong>Function</strong> is optional: If the initial state has to be calculated via some logic, we will use this as: <code>initFunc(initState).</code> <br/> <br/>
                <small>(Check the code for the detailed syntax of dispatching actions.)</small>
            </p>
            <form className="mb-3" onSubmit={handleAdd}>
                <input className="form-control mb-2" type="text" value={name} onChange={handleName} placeholder="Name..."/>
                <input className="form-control mb-2" type="text" value={phone} onChange={handlePhone} placeholder="Phone Number..."/>
                <button className="btn me-2 mb-2 btn-primary" type="submit">Add Customer</button>
            </form>
            {
                customers.map((item, i) => {
                    return (
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-between mb-4" key={`item_${i}`}>
                            <div className="customer">
                                <strong>Name: </strong>{item.name} &nbsp; <strong>Phone: </strong> {item.phone}
                            </div>
                            <button className="btn btn-sm btn-danger" onClick={()=>handleRemove(item)}>Remove</button>
                        </div>
                    )
                })
            }

        </>
    )
}

export default ReducerHook;