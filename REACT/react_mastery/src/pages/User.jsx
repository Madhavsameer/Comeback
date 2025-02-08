import React, { useState } from 'react'

function User() {

    const [name,setname]=useState("");
    function handlename(){
        let a=prompt("Enter your name: ")
        setname(a);
    }
  return (
    <div>

        <h1>Username is {name}</h1>
        <button onClick={handlename}>Login</button>
      
    </div>
  )
}

export default User;
