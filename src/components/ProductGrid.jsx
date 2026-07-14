import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products, onProductClick }) => {
  if (!products || products.length === 0) {
    return (
      <div className="empty-state">
        <h2>No products found</h2>
        <p>Try adjusting your search.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div key={product.id} style={{ animationDelay: `${index * 0.05}s` }}>
          <ProductCard product={product} onClick={onProductClick} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
