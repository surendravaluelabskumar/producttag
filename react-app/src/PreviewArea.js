import React, { useEffect, useRef } from 'react';
import A4Page from './A4Page';

function PreviewArea({ layout }) {
  const horizontalRulerRef = useRef(null);
  const verticalRulerRef = useRef(null);

  useEffect(() => {
    const horizontalRuler = horizontalRulerRef.current;
    const verticalRuler = verticalRulerRef.current;

    if (horizontalRuler) {
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
    }

    if (verticalRuler) {
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
  }, []);

  return (
    <div className="preview-area">
      <div id="horizontal-ruler" ref={horizontalRulerRef}></div>
      <div className="page-and-vertical-ruler">
        <div id="vertical-ruler" ref={verticalRulerRef}></div>
        <A4Page layout={layout} />
      </div>
    </div>
  );
}

export default PreviewArea;
