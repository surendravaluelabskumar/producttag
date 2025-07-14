import React from 'react';

function A4Page({ layout, products, onClearProducts }) {
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

  const boxes = products.map((product, i) => {
    if (!product) {
      return <div className="box" key={i}></div>;
    }

    const { name, mrp, price, blinkIt, discount, buyonegetOne } = product;

    return (
      <div className="box" key={i}>
        <div className="product-name" style={{ fontSize: `${fontSizeTitle}px` }}>
          {name}
        </div>
        <div className="price-details">
          <div className="mrp-price-group">
            <span className="mrp" style={{ fontSize: `${fontSizeMrp}px` }}>
              MRP: ₹{mrp}
            </span>
            <span className="our-price" style={{ fontSize: `${fontSizePrice}px` }}>
              ₹{price}
            </span>
          </div>
          <div className="discount-blinkit-group">
            <div className="discount" style={{ fontSize: `${fontSizeDiscount}px` }}>
              Disc: {discount}%
            </div>
            {blinkIt && (
              <div className="blinkit-price" style={{ fontSize: `${fontSizePrice}px` }}>
                Blinkit: ₹{blinkIt}
              </div>
            )}
          </div>
          {buyonegetOne && <div className="buy-one-get-one">Buy 1 Get 1 Free</div>}
        </div>
      </div>
    );
  });

  return (
    <>
      <button onClick={onClearProducts} style={{marginBottom: "10px"}}>Clear All</button>
      <div id="a4-page" style={pageStyle}>
        {boxes}
      </div>
    </>
  );
}

export default A4Page;
