import React from 'react'
import './navbar.scss'
import {RiRefreshLine} from 'react-icons/ri'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import { navbarmenu } from './data'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate= useNavigate()

  return (
    <div className='Navbar_Main'>
        <div className='Navbar_Sub'>
          {/* Logo plus header */}
                 <div className='Navbar_Logo'>
                    <div className='Logo_continer'>
                    <img src={require('../../Images/shinobisign.png')} alt="" />
                    </div>
                     <div className='Navbar_Logo_Header'>
                       MissxArtist
                     </div>
                 </div>
                 {/* Navbar list */}
            <div className='Navbar_Menu'>
                {navbarmenu.map((item,id)=>{
                  return(
                    <div key={id} className='Navbar_Menu_Items' onClick={()=>navigate(item.url)} >
                      {item.name}
                    </div>
                  )
                })}
            </div>
            {/* Navbar icons  */}
            <div className='Navbar_Icons'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-regular fa-user"></i>
            <i class="fa-regular fa-heart"></i>
            <RiRefreshLine />
            <HiOutlineShoppingCart />
            </div>
        </div>
    </div>
  )
}

export default Navbar