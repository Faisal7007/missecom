import React from 'react'
import './Home.scss'
import { products } from './products';
const Home = () => {
  return (
    <>
    <div className='home'>yaha pe sliding images rahegi or sales and offers</div>
      <div className='category'>
      {products.map((product) => (
        <div className='card' key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
        </div>
      ))}
    </div>
    </>
  )
}

export default Home 