import React, { useState } from "react";
import fileDownload from "js-file-download";
import MainHead from '@/components/MainHead'
import axios from "axios";

function FileDownloadComponent() {
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleDownloadClick = async (event) => {
      event.preventDefault();
      if (password === "022023") {
        try {
          const response = await axios.get("/fdd-032023.pdf", {
            responseType: "blob",
          });
          fileDownload(response.data, "fdd-032023.pdf");
        } catch (error) {
          console.log(error);
        }
        setErrorMessage("");
      } else {
        setErrorMessage("Password is incorrect, please try again.");
      }
    };

return (

<div>
    <MainHead metaTitle="Residential and Commercial cleaning franchise, FDD."
        metaKeywords="Put Keywords here for FDD page" metaDesc="Put description here for FDD page" />
    <div className='absolute top-0 w-full h-full z-40  bg-[#1d1d2b] '>
        <div className="w-full m-auto mt-[10%] max-w-xs">
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                        Please Enter Passowrd
                    </label>
                    <input type="password"
                        className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        value={password} onChange={handlePasswordChange} />
                </div>
                <div className="flex flex-col items-center justify-between">
                    <div>
                        
                    <button
                        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        onClick={handleDownloadClick}>Descargar PDF</button>
                    </div>
                    <div className="text-red-700">
                    {errorMessage && <p>{errorMessage}</p>}
                        
                    </div>
                </div>
            </form>
        </div>
    </div>

</div>
);
}

export default FileDownloadComponent;
