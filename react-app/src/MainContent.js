import React from 'react';
import PreviewArea from './PreviewArea';

function MainContent({ layout }) {
  return (
    <div className="main-content">
      <PreviewArea layout={layout} />
    </div>
  );
}

export default MainContent;
