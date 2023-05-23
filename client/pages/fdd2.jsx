import React, { useState } from "react";
import fileDownload from "js-file-download";
import MainHead from '@/components/MainHead'
import { Document, Page, pdfjs } from 'react-pdf';
import axios from 'axios';
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaFileDownload
} from "react-icons/fa";
import Head from 'next/head';

import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function FileDownloadComponent() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleDownload = () => {
    if (password === '032023') {
      axios({
        url: `${process.env.NEXT_PUBLIC_PDF_URL}/fdd-032023.pdf`,
        method: 'GET',
        responseType: 'blob', // El tipo de respuesta es una descarga de archivo
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'OM_032023.pdf');
        document.body.appendChild(link);
        link.click();
      }).catch((error) => {
        setError('Download has failed.');
        console.error(error);
      });
      setShowModal(false);
      setPassword('');
      setError('');
    } else {
      setError('Password is incorrect, please try again.');
    }
  }

return (

  <div>
     
  <div className='flex justify-center w-full ' >


    <div className='mt-[10%] w-[650px] shadow-lg shadow-black  rounded border-black aspect-[1/1.3] mb-4 overflow-hidden'>

      <div className='flex flex-row items-center justify-between p-2 bg-gray-100 rounded-t'>
        <p className='p-2 mx-5 text-white bg-pink-800 border rounded '>
          Page {pageNumber} of {numPages}
        </p>

        <div>
          {/* Botón para abrir el modal */}
          <button className='p-2 text-white bg-pink-800 rounded hover:bg-pink-700' onClick={() => setShowModal(true)}><FaFileDownload /></button>

          {/* Modal para ingresar contraseña */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
              <div className="max-w-md p-4 mx-auto bg-white rounded-lg">
                <h3 className="mb-4 text-lg font-medium">Please enter the password.</h3>
                <input type="password" className="w-full p-2 mb-2 border border-gray-300 rounded-md" value={password} onChange={handlePasswordChange} />
                {error && <p className="mb-2 text-red-600">{error}</p>}
                <button className="px-4 py-2 mr-2 text-white bg-pink-500 rounded-md hover:bg-pink-400" onClick={handleDownload}>Download</button>
                <button className="px-4 py-2 text-gray-700 bg-gray-300 rounded-md hover:bg-gray-400" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          )}
        </div>
        <div className='mx-5'>
          <button
            className='p-2 mx-1 text-white bg-pink-800 rounded hover:bg-pink-700'
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            <FaChevronCircleLeft />
          </button>
          <button
            className='p-2 mx-1 text-white bg-pink-800 rounded hover:bg-pink-700'
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            <FaChevronCircleRight />

          </button>

        </div>

      </div>
      <Document
        file={`${process.env.NEXT_PUBLIC_PDF_URL}/fdd-032023.pdf`}
        onLoadSuccess={onDocumentLoadSuccess}

      >
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  </div>
</div>
);
}

export default FileDownloadComponent;
