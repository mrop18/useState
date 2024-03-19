import React from 'react'
import './Navbar.css'

const Navbar = () => {
  
  return (
    <div>
      <div className='nav-bar-wrapper'>
        <div className='nav-bar-bx1'>
          <div className='nav-bar-content'>
            <div className='nav-bar-logo'>
              <h1>fav muvs</h1>
            </div>
            <div className='mainmenu'>
              <a href="">Home</a>
              <a href="">Store</a>
              <a href="">Live TV</a>
              <a href="">Categories</a>
              <a href="">My Saved</a>

            </div>
            <div className='user-bar'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar