import React from 'react'
import { useState, useEffect } from 'react'

const LittleComponent = (props) => {

    useEffect( ()=> {
        //This hook will run everytime the compenent is created AND the return function will run everytime it is killed
        if(props.tickleCount === 0)
            console.log("The little component is born...")
        return ()=> console.log("You destroyed the little component you heartless monster!")
    },[])

    useEffect( ()=> {
        //This hook will run everytime the compenent is created, everytime it is tickled AND will run the return function everytime it is killed
        if(props.tickleCount > 0) {
            console.log("You tickled the little component.")
        }
    }, [props.tickleCount])

    return (
        <div className='bg-secondary color-container mb-3'>
            { props.tickleCount === 0 ?
                "I am the little component and I am very cute. Please don't kill me."
                :
                `Hoohoo you just tickled me ${props.tickleCount} times!`
            }
        </div>
    )
}

const EffectHook = () => {

    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);

    function killIt() {
        setShow((s)=>!s);
        setCount(0);
    }

    return (
        <>
            <p>
                <code>useEffect()</code> is out lifecycle management hook. Depending on how you pass the arguments or assigning a return function, this hook acts in several ways. We can make our code do things when a component is <strong>created, updated or killed.</strong> <br/> <br/> Effect hook has 2 arguments: <br/> <code>useEffect(<var>&lt;function&gt;,&lt;[props, states]&gt;</var>)</code> <br/> The function is whatever action you want to take when a mount, update or unmount happens. The array tells the hook which states or props to watch for update. (If it's given <code>[]</code> it will only run at first mount.) <br/><br/> Please check the code and read the console to understand changes and triggers:
            </p>
            <div className='mb-3'>
                { show &&
                    <LittleComponent tickleCount={count}/>
                }
                <button className='btn btn-danger' onClick={()=> killIt()}>{show ? "Kill!" : "Oops."}</button>
                {show &&
                    <button className='btn btn-primary ms-2' onClick={()=> setCount((c)=>c+1)}> Tickle! </button>
                } 
            </div>
            
        </>
    )
}

export default EffectHook;