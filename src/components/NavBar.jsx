import React from 'react'
import { useNavigate } from 'react-router-dom'




function NavBar() {
    const navigate = useNavigate()
  return (
    <div>
        <ol>
            <li onClick={()=> navigate("/")}>home</li>
            <li onClick={()=> navigate("/about")}>about</li>
            <li onClick={()=> navigate("/stock")}>Dashboard</li>
            <li onClick={()=> navigate("/follow")}>Following</li>
        </ol>
        
    </div>
  )
}

export default NavBar