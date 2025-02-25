import React from 'react'
import { useState } from 'react'

function ToDo() {
    const [val,setval]=useState("");
    const [data,setdata]=useState([]);
    function handleChange(e){
        setval(e.target.value);
        e.preventDefault();


       }
       function handleSubmit(){
        data.push(val);
        alert("Task Added succesfully!")
        setval("")
        console.log(data);

        return (
            <div>
                
            </div>
        )
        

       
    }

       
       



    
  return (
    <div>

        
      

      <h1>To-do List App</h1>

      Task: <input type="text" onChange={handleChange} value={val}/>
      <button onClick={handleSubmit}>Add task!</button>
      
    </div>
  )
}

export default ToDo
