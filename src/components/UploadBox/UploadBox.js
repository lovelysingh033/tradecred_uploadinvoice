import React, { useState } from "react";
import Form from "./_Form";
import Uploaded from "./_Uploaded";

const UploadBox = () => {
  const [hasUploaded, setHasUploaded] = useState(false);
  const [Files, setFiles] = useState(undefined);
  const handleChange = (e) => {
    setHasUploaded(true);
    setFiles(e.target.files);
  };
  const handleReset = (e) => {
    e.preventDefault();
    setFiles(undefined);
  };
  return (
    <div className="UploadBox card">
      <h5 className="card-header">Upload Invoice</h5>
      {hasUploaded && Files && Files.length > 0 ? (
        <Uploaded Files={Files} handleReset={handleReset} />
      ) : (
        <Form handleChange={handleChange} Files={Files} />
      )}
    </div>
  );
};

export default UploadBox;
