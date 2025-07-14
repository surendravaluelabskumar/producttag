import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './style.css';

function App() {
  const [layout, setLayout] = useState({
    rows: 12,
    cols: 4,
    marginTop: 5,
    marginRight: 5,
    marginBottom: 5,
    marginLeft: 5,
    boxWidth: 48,
    boxHeight: 24,
    rowMargin: 0,
    colMargin: 3,
    fontSizeTitle: 16,
    fontSizeMrp: 14,
    fontSizePrice: 14,
    fontSizeDiscount: 14,
  });

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleAddProduct = () => {
    if (selectedProduct) {
      setSelectedProducts([...selectedProducts, selectedProduct]);
    }
  };

  const handleClearProducts = () => {
    setSelectedProducts([]);
  };

  return (
    <div className="container">
      <Sidebar
        layout={layout}
        setLayout={setLayout}
        onProductSelect={handleProductSelect}
        onAddProduct={handleAddProduct}
        selectedProduct={selectedProduct}
      />
      <MainContent layout={layout} products={selectedProducts} onClearProducts={handleClearProducts} />
    </div>
  );
}

export default App;
