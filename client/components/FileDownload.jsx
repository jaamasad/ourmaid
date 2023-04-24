import React from "react";

const FileDownload = ({ text, fileName }) => {
    const onButtonClick = () => {
        fetch(`document/${fileName}`).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = fileName ;
                alink.click();
            })
        })
    }
    return (
        <button className="text-blue w-full underline" onClick={onButtonClick}>
            {text}
        </button>
    );
};

export default FileDownload;
