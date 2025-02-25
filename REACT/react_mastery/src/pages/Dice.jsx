import React from 'react'
import { useState } from 'react';

function Dice() {
  const arr=[1,2,3,4,5,6];
  const[value,setValue]=useState(0);
  
  setInterval(() =>{
      let num= Math.floor(Math.random()*6);
      setValue(arr[num]);
  },1000);
  return (
  
    <div>

      <h1>{value}</h1>
     
      
        

   
    
      
    </div>
    );
    
  
}

export default Dice
