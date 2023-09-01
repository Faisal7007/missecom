import React from 'react';
import './Category.scss';
import { products } from './products';

const Category = () => {
  return (
    <div className='category'>
      {products.map((product) => (
        <div className='card' key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Category;
