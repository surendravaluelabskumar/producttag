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
    fontSizeTitle: 18,
    fontSizeMrp: 15,
    fontSizePrice: 15,
    fontSizeDiscount: 15,
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="container">
      <Sidebar layout={layout} setLayout={setLayout} />
      <MainContent layout={layout} products={products} />
    </div>
  );
}

export default App;
