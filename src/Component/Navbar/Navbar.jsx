import React from 'react'
import './navbar.scss'
const Navbar = () => {
  return (
    <div className='Navbar_Main'>
        <div className='Navbar_Sub'>
          {/* Logo plus header */}
                 <div className='Navbar_Logo'>
                     Logo
                 </div>
                 {/* Navbar list */}
            <div>
                <div>Home</div>
                <div>Design</div>
                <div>Blog</div>
            </div>
            {/* Navbar icons  */}
            <div>
                icons
            </div>
        </div>
    </div>
  )
}

export default Navbar