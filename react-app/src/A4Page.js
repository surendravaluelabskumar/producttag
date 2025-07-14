import React from 'react';

function A4Page({ layout, products }) {
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
    const product = products[i % products.length]; // Loop through products if not enough

    if (!product) {
      boxes.push(<div className="box" key={i}></div>);
      continue;
    }

    const { name, mrp, price, blinkIt } = product;
    const discount = ((mrp - price) / mrp) * 100;

    boxes.push(
      <div className="box" key={i}>
        <div className="product-name" style={{ fontSize: `${fontSizeTitle}px` }}>
          {name}
        </div>
        <div className="price-details">
          <div className="mrp-price-group">
            <span className="mrp" style={{ fontSize: `${fontSizeMrp}px` }}>
              MRP: ₹{mrp.toFixed(2)}
            </span>
            <span className="our-price" style={{ fontSize: `${fontSizePrice}px` }}>
              Our: ₹{price.toFixed(2)}
            </span>
          </div>
          {blinkIt && (
            <div className="blinkit-price" style={{ fontSize: `${fontSizePrice}px` }}>
              Blinkit: ₹{blinkIt.toFixed(2)}
            </div>
          )}
          <div className="discount" style={{ fontSize: `${fontSizeDiscount}px` }}>
            Disc: {discount.toFixed(0)}%
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
