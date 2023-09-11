import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.scss'
const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart'>
      {cartItems.map(item => (
        <div className='cart-item' key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className='items-detail'>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
          </div>
          <button>BUY NOW</button>
        </div>

      ))}
    </div>
  );
};

export default Cart;
