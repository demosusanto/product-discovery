import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card glass animate-fade-in" onClick={() => onClick(product)}>
      <div className="product-image-container">
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
        <div className="product-category">{product.category}</div>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-brand">{product.brand || 'No Brand'}</p>
        <div className="product-meta">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <div className="product-rating">
            <span className="star">★</span> {product.rating.toFixed(1)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
