import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/nav.css'



function NavBar() {
    const navigate = useNavigate()
  return (
    <div className='NavBarContainer'>
        <ol className='NavBar'>
            <li onClick={()=> navigate("/")}>Home</li>
            <li onClick={()=> navigate("/about")}>About</li>
            <li onClick={()=> navigate("/stock")}>Dashboard</li>
            <li onClick={()=> navigate("/follow")}>Following</li>
        </ol>
        
    </div>
  )
}

export default NavBar