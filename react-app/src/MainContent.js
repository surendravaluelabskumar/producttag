import React from 'react';
import PreviewArea from './PreviewArea';

function MainContent({ layout, products }) {
  return (
    <div className="main-content">
      <PreviewArea layout={layout} products={products} />
    </div>
  );
}

export default MainContent;
