import React, { useState } from 'react'

function Greet(props) {

    
  return (

    


    <div>

        <h1>Hello {props.name}</h1>


      
    </div>
  )
}

{
    Greet.defaultProps={
        name:"Guest"

    }
}



export default Greet
