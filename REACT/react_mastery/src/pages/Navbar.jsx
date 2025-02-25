import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>

        <Link to="/counter">Counter</Link>
        <br />
        <Link to="/user">User</Link>
        <br />
        <Link to="/hero">Hero</Link>
        <br />
        <Link to="/todo">Todo</Link>
      
    </div>
  )
}

export default Navbar
