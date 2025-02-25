import React, { useState } from 'react'



function ToggleTheme() {
    const arr=["white","black","blue","green","yellow","orange"];
    const [color,setColor]=useState("white");
    
    

    setInterval(() => {
        let num= Math.floor(Math.random()*6);
        console.log(num);
        setColor(arr[num]);
    }, 1000);
  return (


    <div id='body'  style={{backgroundColor:color}}>

        <h1>Heyu syghjks</h1>
        <button >Change theme</button>


      
    </div>
  )
}

export default ToggleTheme
