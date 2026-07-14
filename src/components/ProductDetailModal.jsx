import React, { useEffect } from 'react';
import './ProductDetailModal.css';

const ProductDetailModal = ({ product, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!product) return null;

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-body">
          <div className="modal-gallery">
            <img src={product.images[0] || product.thumbnail} alt={product.title} className="main-image" />
            {product.images.length > 1 && (
              <div className="thumbnail-list">
                {product.images.slice(1, 4).map((img, idx) => (
                  <img key={idx} src={img} alt={`${product.title} ${idx + 1}`} className="thumbnail-image" />
                ))}
              </div>
            )}
          </div>

          <div className="modal-info">
            <div className="modal-header">
              <h2 className="modal-title">{product.title}</h2>
              <p className="modal-brand">{product.brand}</p>
            </div>

            <div className="modal-price-container">
              <span className="modal-price">${product.price.toFixed(2)}</span>
              {product.discountPercentage > 0 && (
                <span className="modal-discount">-{product.discountPercentage}%</span>
              )}
            </div>

            <p className="modal-description">{product.description}</p>

            <div className="modal-meta">
              <div className="meta-item">
                <span className="meta-label">Category</span>
                <span className="meta-value">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Rating</span>
                <span className="meta-value">
                  <span className='star' style={{ marginRight: '5px' }}>★</span>
                  {product.rating}
                </span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Stock </span>
                <span className="meta-value" style={{ color: product.stock < 10 ? '#ef4444' : '#10b981' }}>
                  {product.availabilityStatus} ({product.stock})
                </span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Warranty</span>
                <span className="meta-value">{product.warrantyInformation}</span>
              </div>
            </div>

            <div className="modal-actions">
              <button className="btn btn-primary btn-full">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
