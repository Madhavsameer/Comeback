import React, { useState } from 'react'

function Counter() {

    const [num,setnum]=useState(0);

    function handleIncrement(){
        setnum(num+1);
    }
    function handleDecrement(){
        setnum(num-1);
    }
    function handleReset(){
        setnum(0);
    }

    function handleManual(){
        let num=prompt("Enter the number")
        setnum(num);
    }
    function handleRandom(){
        let num=Math.floor(Math.random()*8);
                setnum(num);
    }
  return (

    <div>


        <h1>{num}</h1>
        <button onClick={handleIncrement} >Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleManual}>Manual</button>
        <button onClick={handleRandom}>Random</button>


    </div>

    
    
  )
}

export default Counter
