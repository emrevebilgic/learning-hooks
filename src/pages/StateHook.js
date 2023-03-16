import React from 'react'
import { useState } from 'react'

const StateHook = () => {

    const [color, setColor] = useState("primary");
    return (
        <>
            <p>
                useState is the simplest of our hooks. It is the hook to manipulate a component's states. Each state that is bound to a useState hook can be assigned to a new value by the setter function also provided by the hook. As you know, when a component's state is changed, a re-render happens... Lets see it below:
            </p>

            <div className="d-inline-block mb-3">
                <div className={`bg-${color} w-100 color-container mb-3`}>
                {`My color is ${color}`}
                </div>
                <button className='btn btn-primary me-2 mb-2' onClick={ ()=> setColor("primary") }>Primary</button>
                <button className='btn btn-secondary mx-2 mb-2' onClick={ ()=> setColor("secondary") }>Secondary</button>
                <button className='btn btn-warning mx-2 mb-2' onClick={ ()=> setColor("warning") }>Warning</button>
                <button className='btn btn-danger ms-2 mb-2' onClick={ ()=> setColor("danger") }>Danger</button>
            </div>
        </>
    )
}

export default StateHook;