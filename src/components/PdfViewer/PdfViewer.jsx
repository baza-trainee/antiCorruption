import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './PdfViewer.scss';

import close from '../../assets/burgerMenu/burgerClose.svg';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ pdfPath, onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(window.innerWidth * 0.8);

  function onDocumentLoadSuccess({ numPages }) {
    console.log(numPages);
    setNumPages(numPages);
  }

  useEffect(() => {
    document.body.classList.add('pdf-modal-open');

    function updatePageWidth() {
      setPageWidth(window.innerWidth * 0.8);
    }

    window.addEventListener('resize', updatePageWidth);

    return () => {
      document.body.classList.remove('pdf-modal-open');
      window.removeEventListener('resize', updatePageWidth);
    };
  }, []);

  return (
    <div className='pdf'>
      <div className='pdf__modal'>
        <button onClick={onClose} className='pdf__button_close'>
          <img src={close} alt="X" />
        </button>
        <Document
          file={pdfPath}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={pageWidth}
            />
          ))}
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
