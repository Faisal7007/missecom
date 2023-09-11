import React, { useEffect, useContext } from 'react';
import './Mobilecovers.scss';
import mobilebanner from '../../videos/mobilebanner.mp4'
import { data } from './data.js'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { CartContext } from '../Addtocart/CartContext';
import { toast } from 'react-toastify';
const Product = ({ id,image, name, price }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id,image, name, price });
    toast.success('Added to cart');
  };

  return (
    <div className='product-card' key={id}>
      <img src={image} alt={name} />
      <div className='details'>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>Rating: {data.products[id - 1].rating}</p>
        <p>{data.products[id - 1].sold} already sold</p>
      </div>
      <button>BUY NOW</button>
      <button onClick={handleAddToCart}>ADD TO CART <HiOutlineShoppingCart /></button>
    </div>
  );
};

const MobileCovers = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='mobcover'>
      <div className='mobile-banner'>
        <video src={mobilebanner} autoPlay loop muted id='mob-vdo'>
        </video>
      </div>
      <div className='mobile-products'>
        {data.products.map(product => (
          <Product key={product.id} id={product.id} image={product.image}  name={product.name} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default MobileCovers;
