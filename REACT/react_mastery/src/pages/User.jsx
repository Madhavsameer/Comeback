import React, { useState } from 'react'

function User() {

    const [name,setname]=useState(false);

    

    function handlename(){
      if(name==false)
        {
          setname("User");
        }
        else{
          setname(true);
          let a=prompt("Enter your name: ")
        setname(a);


        }

      
         
    }
  return (
    <div>

        <h1>Username is {name}</h1>
        <button onClick={handlename}>Login</button>
      
    </div>
  )
}

export default User;
