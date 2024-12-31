import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  
  return (
    <div className='links'>

        <Link className='link' to='/Home'>Home </Link>
        <Link className='link' to='/About'>About</Link>
        <Link className='link' to='/Contact'>Contact</Link>
        <Link className='link' to="/Counter">Counter</Link>
        <Link className='link' to="/DataFetch">Data</Link>
        <Link className='link' to="/ApiFetch">Api</Link>
        <Link className='link' to="/FormHandling">Form</Link>
       
      
    </div>
  )
}

export default Navbar
