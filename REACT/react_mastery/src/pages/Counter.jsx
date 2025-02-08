import React, { useState } from 'react'

function Counter() {

    const [value,setvalue]=useState(10);
    
    function handleIncrease(){
       setvalue(value+1)
        
    }
    function handleDecrease(){
        setvalue(value-1);
    }
    function Zero(){
        setvalue(0);
    }
    function handleManual(){
        let a=prompt("Enter the value");
        setvalue(a);
    }
    function handleRandom(){
        let a=Math.floor(Math.random()*6);
        setvalue(a);
    }


    
  return (
    <div>

        <h1>{value}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>decrease</button>
        <button onClick={Zero}>Reset</button>
        <button onClick={handleManual}>Manual</button>
        <button onClick={handleRandom}>Random</button>
        
        


      
    </div>
  )
}

export default Counter
