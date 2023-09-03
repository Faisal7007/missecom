import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Design from '../Pages/Design/Design'
import Blog from '../Pages/Blog/Blog'
import Navbar from '../Component/Navbar/Navbar'
import Home from '../Pages/Home/Home'
import Cart from '../Pages/Addtocart/Cart'
import Wish from '../Pages/Yourwishlist/Wish'
import Footer from '../Component/Footer/Footer'
import Copyright from '../Component/Copyright/Copyright'
import Account from '../Pages/Account/Account'
const Routing = () => {
  return (
    <div className='Main_Routing'>
      
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/design' element={<Design/>}/>
        <Route  path='/blog' element={<Blog/>}/>
        <Route  path='/cart' element={<Cart/>}/>
        <Route  path='/wishlist' element={<Wish/>}/>
        <Route  path='/account' element={<Account/>}/>
      </Routes>
      <Footer/>
      <Copyright/>
    </Router>
    </div>
  )
}

export default Routing