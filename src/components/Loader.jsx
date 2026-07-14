import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container animate-fade-in">
      <div className="spinner"></div>
      <p>Loading products...</p>
    </div>
  );
};

export default Loader;
