import React from 'react'
import { useState } from 'react'

const StateHook = () => {

    const [color, setColor] = useState("primary");
    return (
        <>
            <div className="d-inline-block mb-3">
                <div className={`bg-${color} w-100 color-container mb-3`}>
                {`My color is ${color}`}
                </div>
                <button className='btn btn-primary me-2 mb-2' onClick={ ()=> setColor("primary") }>Primary</button>
                <button className='btn btn-secondary mx-2 mb-2' onClick={ ()=> setColor("secondary") }>Secondary</button>
                <button className='btn btn-warning mx-2 mb-2' onClick={ ()=> setColor("warning") }>Warning</button>
                <button className='btn btn-danger ms-2 mb-2' onClick={ ()=> setColor("danger") }>Danger</button>
            </div>
            <p className='explanation'>
                <code>useState()</code> is the simplest of our hooks. It is the hook to manipulate a component's states. We create it like this: <br/> <code>const [<var>someState, setSomeState</var>] = useState(<var>&lt;initialState&gt;</var>)</code> <br/> Each state that is bound to a useState hook can be assigned to a new value by the setter function also provided by the hook. As you know, when a component's state is changed, a re-render happens... Lets see it below:
            </p>
        </>
    )
}

export default StateHook;