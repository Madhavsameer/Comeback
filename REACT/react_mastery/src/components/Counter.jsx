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
  return (

    <div>


        <h1>{num}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>


    </div>

    
    
  )
}

export default Counter
