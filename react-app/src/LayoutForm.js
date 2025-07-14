import React from 'react';

function LayoutForm({ layout, setLayout }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLayout((prevLayout) => ({
      ...prevLayout,
      [name]: parseInt(value, 10),
    }));
  };

  return (
    <form id="layout-form">
      <div className="form-group">
        <label htmlFor="rows">Rows</label>
        <input
          type="number"
          id="rows"
          name="rows"
          value={layout.rows}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cols">Columns</label>
        <input
          type="number"
          id="cols"
          name="cols"
          value={layout.cols}
          onChange={handleChange}
        />
      </div>
      <div className="margin-controls">
        <div className="margin-top">
          <label htmlFor="margin-top">Top (mm)</label>
          <input
            type="number"
            id="margin-top"
            name="marginTop"
            value={layout.marginTop}
            onChange={handleChange}
          />
        </div>
        <div className="margin-middle">
          <div className="margin-left">
            <label htmlFor="margin-left">Left (mm)</label>
            <input
              type="number"
              id="margin-left"
              name="marginLeft"
              value={layout.marginLeft}
              onChange={handleChange}
            />
          </div>
          <div className="margin-right">
            <label htmlFor="margin-right">Right (mm)</label>
            <input
              type="number"
              id="margin-right"
              name="marginRight"
              value={layout.marginRight}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="margin-bottom">
          <label htmlFor="margin-bottom">Bottom (mm)</label>
          <input
            type="number"
            id="margin-bottom"
            name="marginBottom"
            value={layout.marginBottom}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="box-width">Box Width (mm)</label>
        <input
          type="number"
          id="box-width"
          name="boxWidth"
          value={layout.boxWidth}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="box-height">Box Height (mm)</label>
        <input
          type="number"
          id="box-height"
          name="boxHeight"
          value={layout.boxHeight}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="row-margin">Row Margin (mm)</label>
        <input
          type="number"
          id="row-margin"
          name="rowMargin"
          value={layout.rowMargin}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="col-margin">Column Margin (mm)</label>
        <input
          type="number"
          id="col-margin"
          name="colMargin"
          value={layout.colMargin}
          onChange={handleChange}
        />
      </div>
      <hr />
      <h3>Font Sizes</h3>
      <div className="form-group">
        <label htmlFor="font-size-title">Product Name (px)</label>
        <input
          type="number"
          id="font-size-title"
          name="fontSizeTitle"
          value={layout.fontSizeTitle}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="font-size-mrp">MRP (px)</label>
        <input
          type="number"
          id="font-size-mrp"
          name="fontSizeMrp"
          value={layout.fontSizeMrp}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="font-size-price">Actual Price (px)</label>
        <input
          type="number"
          id="font-size-price"
          name="fontSizePrice"
          value={layout.fontSizePrice}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="font-size-discount">Discount (px)</label>
        <input
          type="number"
          id="font-size-discount"
          name="fontSizeDiscount"
          value={layout.fontSizeDiscount}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default LayoutForm;
