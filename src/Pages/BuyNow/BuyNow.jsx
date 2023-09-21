import React, { useState } from "react";
import "./BuyNow.scss";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { toast } from "react-toastify";
import {TbReplace,TbTruckDelivery} from 'react-icons/tb'
import {GiTakeMyMoney} from 'react-icons/gi'
import {MdAssuredWorkload} from 'react-icons/md'
import {FaAward} from 'react-icons/fa'
const BuyNow = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuyNow = () => {
    // Add logic to handle the purchase (e.g., make an API call)
  };
  const handleAddToCart = () => {
    // addToCart({ id, image, name, price });
    toast.success("Added to cart");
  };

  return (
    <div className="buy-now-container">
      <div className="product-details">
        <img src="product-image-url.jpg" alt="Product" />
        <div className="details">
          <div className="inside-detail">
            <h2>Product Name</h2>
            <p>Product Description</p>
            <p>Price: $99.99</p>
          </div>

          <div className="quantity-selection">
            <button
              className="quantity-button"
              id="minus-btn"
              onClick={handleDecrement}
            >
              -
            </button>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button
              className="quantity-button"
              id="plus-btn"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>

          <div className="button-container">
            <button className="buy-now-button" onClick={handleBuyNow}>
              Buy Now
            </button>
            <button className="buy-now-button" onClick={handleAddToCart}>
              ADD TO CART <HiOutlineShoppingCart />
            </button>
          </div>
        </div>
      </div>
      <div className="assurance-div">
        <div className="assurance-box"><TbReplace/> 7 days replacement</div>
        <div className="assurance-box"><TbTruckDelivery/> Free Delivery</div>
        <div className="assurance-box"><GiTakeMyMoney/> Pay On Delivery</div>
        <div className="assurance-box"><FaAward/>Top Quality</div>
        <div className="assurance-box"><MdAssuredWorkload/>Assured Delivery</div>
      </div>
    </div>
  );
};

export default BuyNow;
