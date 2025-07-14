import React from 'react';
import A4Page from './A4Page';

function MainContent({ layout, products, onClearProducts }) {
  return (
    <div className="main-content">
      <A4Page layout={layout} products={products} onClearProducts={onClearProducts} />
    </div>
  );
}

export default MainContent;
