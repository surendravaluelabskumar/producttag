import React from 'react';
import LayoutForm from './LayoutForm';
import ProductSearch from './ProductSearch';

function Sidebar({ layout, setLayout, onProductSelect, onAddProduct, selectedProduct, onAddAll }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="sidebar">
      <h2>Layout Controls</h2>
      <LayoutForm layout={layout} setLayout={setLayout} />
      <div style={{margin: "20px 0"}}>
        <ProductSearch onProductSelect={onProductSelect} onAddAll={onAddAll} />
        <button onClick={onAddProduct} disabled={!selectedProduct} style={{marginTop: "10px"}}>
          Add Product
        </button>
      </div>
      <button id="print-btn" onClick={handlePrint}>
        Print
      </button>
    </div>
  );
}

export default Sidebar;
