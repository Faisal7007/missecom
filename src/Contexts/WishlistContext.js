// WishlistContext.js
import React, { createContext, useState, useContext } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
  return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (item) => {
    // Add item to the wishlistItems state
    setWishlistItems([...wishlistItems, item]);
  };

  const removeFromWishlist = (itemId) => {
    // Remove item from the wishlistItems state
    setWishlistItems(wishlistItems.filter((item) => item.id !== itemId));
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
