import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const ProductSearch = ({ onProductSelect }) => {
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

  return (
    <Select
      value={selectedProduct}
      onChange={handleChange}
      options={products}
      isClearable
      placeholder="Search for a product..."
    />
  );
};

export default ProductSearch;
