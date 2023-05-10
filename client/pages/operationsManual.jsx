import MainHead from '@/components/MainHead'
import Hero from '@/components/OpreationsManual/Hero'
import TextSection from '@/components/OpreationsManual/TextSection'
import React, { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import axios from 'axios';
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaFileDownload
} from "react-icons/fa"; 

import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const OperationsManual = () => {

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
        url: 'http://localhost:3000/OM_032023.pdf',
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
    <div className='flex justify-center w-full ' >
      <div className='mt-[10%] w-[650px] shadow-lg shadow-black  rounded border-black aspect-[1/1.3] mb-4 overflow-hidden'>

        <div className='flex flex-row bg-gray-100 items-center justify-between p-2 rounded-t'>
          <p className=' mx-5 border  rounded p-2 bg-pink-800  text-white'>
            Page {pageNumber} of {numPages}
          </p>

          <div>
            {/* Botón para abrir el modal */}
            <button className='rounded p-2 bg-pink-800 text-white hover:bg-pink-700' onClick={() => setShowModal(true)}><FaFileDownload/></button>

            {/* Modal para ingresar contraseña */}
            {showModal && (
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-4 max-w-md mx-auto">
                <h3 className="text-lg font-medium mb-4">Please enter the password.</h3>
                <input type="password" className="border border-gray-300 p-2 rounded-md w-full mb-2" value={password} onChange={handlePasswordChange} />
                {error && <p className="text-red-600 mb-2">{error}</p>}
                <button className="bg-pink-500 hover:bg-pink-400 text-white rounded-md py-2 px-4 mr-2" onClick={handleDownload}>Download</button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md py-2 px-4" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
            )}
          </div>
          <div className='mx-5'>
            <button
              className='rounded bg-pink-800 text-white p-2 mx-1 hover:bg-pink-700'
              disabled={pageNumber <= 1}
              onClick={() => setPageNumber(pageNumber - 1)}
            >
              <FaChevronCircleLeft/>
            </button>
            <button
              className='rounded bg-pink-800 text-white p-2 mx-1 hover:bg-pink-700'
              disabled={pageNumber >= numPages}
              onClick={() => setPageNumber(pageNumber + 1)}
            >
              <FaChevronCircleRight/>

            </button>

          </div>

        </div>
        <Document
          file={'http://localhost:3000/OM_032023.pdf'}
          onLoadSuccess={onDocumentLoadSuccess}
          onError={(error) => console.error("Error loading PDF:", error)}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );

}

export default OperationsManual