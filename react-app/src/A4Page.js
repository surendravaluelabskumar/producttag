import React from 'react';

function A4Page({ layout }) {
  const {
    rows,
    cols,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    boxWidth,
    boxHeight,
    rowMargin,
    colMargin,
    fontSizeTitle,
    fontSizeMrp,
    fontSizePrice,
    fontSizeDiscount,
  } = layout;

  const pageStyle = {
    padding: `${marginTop}mm ${marginRight}mm ${marginBottom}mm ${marginLeft}mm`,
    gridTemplateColumns: `repeat(${cols}, ${boxWidth}mm)`,
    gridTemplateRows: `repeat(${rows}, ${boxHeight}mm)`,
    gridColumnGap: `${colMargin}mm`,
    gridRowGap: `${rowMargin}mm`,
  };

  const totalBoxes = rows * cols;
  const boxes = [];
  for (let i = 0; i < totalBoxes; i++) {
    const mrp = 200;
    const ourPrice = 150;
    const discount = ((mrp - ourPrice) / mrp) * 100;

    boxes.push(
      <div className="box" key={i}>
        <div className="product-name" style={{ fontSize: `${fontSizeTitle}px` }}>
          Product Name {i + 1}
        </div>
        <div className="price-details">
          <div className="mrp-price-group">
            <span className="mrp" style={{ fontSize: `${fontSizeMrp}px` }}>
              MRP: ₹{mrp.toFixed(2)}
            </span>
            <span className="price" style={{ fontSize: `${fontSizePrice}px` }}>
              ₹{ourPrice.toFixed(2)}
            </span>
          </div>
          <div className="discount" style={{ fontSize: `${fontSizeDiscount}px` }}>
            Discount: {discount.toFixed(0)}%
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="a4-page" style={pageStyle}>
      {boxes}
    </div>
  );
}

export default A4Page;
