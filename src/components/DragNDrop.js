import React, { useState, useRef } from 'react';
import './DragNDrop.css';

const DragDropCSV = ({ onFileUploaded }) => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  const handleFiles = (files) => {
    const file = files[0];
    if (file.type === "text/csv") {
      setFile(file);
    } else {
      alert("Please upload a CSV file.");
    }
  };

  return (
    <div 
      className={`drag-drop-area ${dragActive ? "drag-active" : ""}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input 
        ref={inputRef}
        type="file" 
        accept=".csv"
        onChange={handleChange}
        style={{display: "none"}}
      />
      <p>Drag and drop your CSV file here</p>
      <button className="upload-button" onClick={onButtonClick}>
        or click here to upload
      </button>
      {file && <p>File uploaded: {file.name}</p>}
    </div>
  );
};

export default DragDropCSV;