import React from 'react';
import LayoutForm from './LayoutForm';

function Sidebar({ layout, setLayout }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="sidebar">
      <h2>Layout Controls</h2>
      <LayoutForm layout={layout} setLayout={setLayout} />
      <button id="print-btn" onClick={handlePrint}>
        Print
      </button>
    </div>
  );
}

export default Sidebar;
