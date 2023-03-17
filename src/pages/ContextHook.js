import React from 'react'
import { useState, createContext } from 'react'
import Child1 from '../components/ContextChild'

export const SomeContext = createContext();

const ContextHook = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <p>
                useContext hook is the medicine for the <strong>prop drillling</strong> curse. As you know, a state can be passed from parent to child. Unfortunately, it's a one way street. <strong>A Context</strong> is going to help our child component to manipulate its parent's state.
            </p>

            <p>
                Below, parent has the <code>count</code> state which is initially 0.The button updating the state is in the child component. We <strong>create</strong> a context at parent level: <br/> <code> const MyContext = createContext()</code> <br/> Then we will <strong>provide</strong> a context in render, wrapping the children: <br/>
                <code>&lt;Mycontext.Provider value=&#123;<var>setCount</var>&#125;&gt; <br/>
                &emsp;&lt;Children /&gt; <br/>
                &lt;Mycontext.Provider /&gt;
                </code> <br/>
                 Now all the children wrapped by this context will access that setter function via useContext hook.
            </p>


            <SomeContext.Provider value={setCount}>
                <div className='context-child'>
                    <div className='bg-primary color-container mb-3'>{`The count is ${count}`}</div>
                    <Child1 />
                </div>
            </SomeContext.Provider>
        </>
    )
}

export default ContextHook;