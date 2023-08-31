import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Design from '../Pages/Design/Design'
import Blog from '../Pages/Blog/Blog'
import Navbar from '../Component/Navbar/Navbar'
import Home from '../Pages/Home/Home'
const Routing = () => {
  return (
    <div className='Main_Routing'>
      <Navbar/>
      <Router>
      <Routes>
        <Route exact path='/' element={<Home  />}/>
        <Route exact path='/design' element={<Design/>}/>
        <Route exact path='/blog' element={<Blog/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default Routing