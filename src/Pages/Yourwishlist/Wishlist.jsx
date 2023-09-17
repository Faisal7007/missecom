import React, { useContext } from 'react';
import  WishlistContext  from '../../Contexts/WishlistContext';
import './Wishlist.scss'
const Wish = () => {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className='wishlist'>
      <h2>Wishlist</h2>
      {wishlistItems.length > 0 ? (
        <div className='wishlist-items'>
          {wishlistItems.map(item => (
            <div className='wishlist-item' key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className='item-details'>
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
              </div>
              <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wish;
