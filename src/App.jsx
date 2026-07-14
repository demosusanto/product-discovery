import React, { useState } from 'react';
import { useProducts } from './hooks/useProducts';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import ProductDetailModal from './components/ProductDetailModal';
import Loader from './components/Loader';

function App() {
  const { products, loading, error, searchQuery, setSearchQuery } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="container">
        {error && (
          <div style={{ color: 'var(--danger)', textAlign: 'center', padding: '2rem' }}>
            <h2>Oops! Something went wrong.</h2>
            <p>{error}</p>
          </div>
        )}
        
        {loading ? (
          <Loader />
        ) : (
          !error && <ProductGrid products={products} onProductClick={handleProductClick} />
        )}
      </main>

      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={closeModal} />
      )}
    </>
  );
}

export default App;
