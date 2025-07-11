document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('layout-form');
    const a4Page = document.getElementById('a4-page');
    const horizontalRuler = document.getElementById('horizontal-ruler');
    const verticalRuler = document.getElementById('vertical-ruler');

    function createRulers() {
        horizontalRuler.innerHTML = '';
        for (let i = 0; i <= 210; i += 10) {
            const mark = document.createElement('div');
            mark.style.position = 'absolute';
            mark.style.left = `${i}mm`;
            mark.style.width = '1px';
            mark.style.height = '10px';
            mark.style.backgroundColor = '#333';
            
            const label = document.createElement('span');
            label.textContent = i;
            label.style.position = 'absolute';
            label.style.left = `${i - 1}mm`;
            label.style.top = '10px';
            
            horizontalRuler.appendChild(mark);
            horizontalRuler.appendChild(label);
        }

        verticalRuler.innerHTML = '';
        for (let i = 0; i <= 297; i += 10) {
            const mark = document.createElement('div');
            mark.style.position = 'absolute';
            mark.style.top = `${i}mm`;
            mark.style.height = '1px';
            mark.style.width = '10px';
            mark.style.backgroundColor = '#333';
            
            const label = document.createElement('span');
            label.textContent = i;
            label.style.position = 'absolute';
            label.style.top = `${i - 3}mm`;
            label.style.right = '12px';
            label.style.writingMode = 'vertical-rl';
            
            verticalRuler.appendChild(mark);
            verticalRuler.appendChild(label);
        }
    }

    function updateLayout() {
        const rows = parseInt(document.getElementById('rows').value);
        const cols = parseInt(document.getElementById('cols').value);
        const marginTop = parseInt(document.getElementById('margin-top').value);
        const marginBottom = parseInt(document.getElementById('margin-bottom').value);
        const marginLeft = parseInt(document.getElementById('margin-left').value);
        const marginRight = parseInt(document.getElementById('margin-right').value);
        const boxWidth = parseInt(document.getElementById('box-width').value);
        const boxHeight = parseInt(document.getElementById('box-height').value);
        const rowMargin = parseInt(document.getElementById('row-margin').value);
        const colMargin = parseInt(document.getElementById('col-margin').value);
        const fontSizeTitle = parseInt(document.getElementById('font-size-title').value);
        const fontSizeMrp = parseInt(document.getElementById('font-size-mrp').value);
        const fontSizePrice = parseInt(document.getElementById('font-size-price').value);
        const fontSizeDiscount = parseInt(document.getElementById('font-size-discount').value);

        // Clear previous layout
        a4Page.innerHTML = '';

        // Set page margins
        a4Page.style.padding = `${marginTop}mm ${marginRight}mm ${marginBottom}mm ${marginLeft}mm`;

        // Set grid layout
        a4Page.style.gridTemplateColumns = `repeat(${cols}, ${boxWidth}mm)`;
        a4Page.style.gridTemplateRows = `repeat(${rows}, ${boxHeight}mm)`;
        a4Page.style.gridColumnGap = `${colMargin}mm`;
        a4Page.style.gridRowGap = `${rowMargin}mm`;


        // Create and append boxes
        const totalBoxes = rows * cols;
        for (let i = 0; i < totalBoxes; i++) {
            const box = document.createElement('div');
            box.className = 'box';
            
            const productName = document.createElement('div');
            productName.className = 'product-name';
            productName.textContent = `Product Name ${i + 1}`;
            productName.style.fontSize = `${fontSizeTitle}px`;
            
            const priceDetails = document.createElement('div');
            priceDetails.className = 'price-details';
            
            const mrp = 200;
            const ourPrice = 150;
            const discount = ((mrp - ourPrice) / mrp) * 100;

            priceDetails.innerHTML = `
                <div class="mrp-price-group">
                    <span class="mrp" style="font-size: ${fontSizeMrp}px;">MRP: ₹${mrp.toFixed(2)}</span>
                    <span class="price" style="font-size: ${fontSizePrice}px;">₹${ourPrice.toFixed(2)}</span>
                </div>
                <div class="discount" style="font-size: ${fontSizeDiscount}px;">Discount: ${discount.toFixed(0)}%</div>
            `;
            
            box.appendChild(productName);
            box.appendChild(priceDetails);
            a4Page.appendChild(box);
        }
    }

    // Initial layout update
    createRulers();
    updateLayout();

    // Update layout on form input change
    form.addEventListener('input', updateLayout);

    // Print button functionality
    const printBtn = document.getElementById('print-btn');
    printBtn.addEventListener('click', () => {
        window.print();
    });
});
