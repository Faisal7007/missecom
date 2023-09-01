import React from 'react'

import './Footer.scss'
import logo from '../Footer/footer_images/Logo.jpg'
import {BsFacebook} from 'react-icons/bs'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {FaSnapchat} from 'react-icons/fa'
import {BiLogoPinterest} from 'react-icons/bi'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer_first_column">
        <img className='logo' src={logo} alt="logo" />
        <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corporis non alias quod laudantium doloribus saepe? Eos tempora mollitia incidunt.</p>
      </div>
      <div className="footer_second_column">
        <h1 className='title' >QUICK LINKS</h1>
        <li className='list' >Design</li>
        <li className='list'>Design</li>
        <li className='list'>Stone</li>
        <li className='list'>HandPrint</li>
        <li className='list'>Blog</li>
        <li className='list'>Blog</li>
      </div>
      <div className="footer_third_column">
        <h1 className='title'>Connect with us</h1>

<div className="icons">
        <div className="icon_div"><BsFacebook className='icon' /> Facebook</div>
        <div className="icon_div"><BiLogoInstagramAlt className='icon'/> Instagram</div>
        <div className="icon_div"><AiFillTwitterCircle className='icon'/> Twitter</div>
        <div className="icon_div"><AiFillYoutube className='icon'/> Youtube</div>
        <div className="icon_div"><BiLogoPinterest className='icon'/> Pinterest</div>
        <div className="icon_div"><FaSnapchat className='icon'/> Snapchat</div>
</div>
      </div>
    </div>
  )
}

export default Footer

