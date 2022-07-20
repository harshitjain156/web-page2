import React from 'react'
import './Nav.css'

function NavBar() {
  return (
    <div className='header'>
        <div className="name">Webpage</div>
        <div className="nav">
            <ul className='navigation'>
                <li className="navi-link">Home</li>
                <li className="navi-link">MORE</li>
                <li className="navi-link">FAQ</li>
                <li className="navi-link">About</li>
            </ul>
        </div>
        
    </div>
  )
}

export default NavBar