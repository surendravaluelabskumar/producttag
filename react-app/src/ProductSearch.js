import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const ProductSearch = ({ onProductSelect, onAddAll }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => {
        const options = data.products.map((product) => ({
          value: product.name,
          label: product.name,
          ...product,
        }));
        setProducts(options);
      });
  }, []);

  const handleChange = (selectedOption) => {
    setSelectedProduct(selectedOption);
    onProductSelect(selectedOption);
  };

  const handleAddAll = () => {
    onAddAll(products);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Select
        value={selectedProduct}
        onChange={handleChange}
        options={products}
        isClearable
        placeholder="Search for a product..."
        styles={{ container: (base) => ({ ...base, flex: 1 }) }}
      />
      <button onClick={handleAddAll} disabled={!products.length} style={{ marginLeft: '10px' }}>
        Add All
      </button>
    </div>
  );
};

export default ProductSearch;
