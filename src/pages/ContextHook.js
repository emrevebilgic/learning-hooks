import React from 'react'
import { useState, createContext } from 'react'
import Child1 from '../components/ContextChild'

export const SomeContext = createContext();

const ContextHook = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <p>
                useContext hook is the medicine for the <strong>prop drillling</strong> curse. As you know, a state can be passed from parent to child. Unfortunately, it does not work the other way. <strong>A Context</strong> is going to help our child component to manipulate its parent's state.
            </p>

            <p>
                Below, parent has the "count" state which is initially 0. But the button is in the child component. We <strong>created a context</strong> at parent level and set its value to the state setter function. So, the child component will access that setter function via useContext hook.
            </p>

            <div className='bg-primary color-container mb-3'>{`The count is ${count}`}</div>

            <SomeContext.Provider value={setCount}>
                <Child1 />
            </SomeContext.Provider>
        </>
    )
}

export default ContextHook;