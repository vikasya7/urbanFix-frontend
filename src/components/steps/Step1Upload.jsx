import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const Step1Upload = ({ data, setData, next }) => {
  const [error, setError] = useState("");
  const [titleError, setTitleError] = useState("");



  const onDrop = useCallback((acceptedFiles) => {
  setData({ ...data, images: acceptedFiles });
  setError("");
}, [data, setData]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: true
  });

  const handleNext = () => {
    let valid = true;

    if (!data.title || data.title.trim() === "") {
      setTitleError("Title is required.");
      valid = false;
    } else {
      setTitleError("");
    }

    if (!data.images || data.images.length === 0) {
      setError("Please upload at least one image.");
      valid = false;
    } else {
      setError("");
    }

    if (valid) {
      next();
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-center py-6">
        Add Snap
      </h1>

      {/* Title Field */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium text-gray-700">Issue Title</label>
        <input
          type="text"
          placeholder="e.g. Broken streetlight near park"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {titleError && <p className="text-red-500 text-sm mt-1">{titleError}</p>}
      </div>

      {/* Drag & Drop Area */}
      <div
        {...getRootProps({
          className: `border-2 border-dashed rounded-lg p-6 text-center cursor-pointer ${
            isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`
        })}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-blue-500">Drop the files here...</p>
        ) : (
          <p className="text-gray-500">Drag & drop files here, or click to select</p>
        )}

        {/* Preview Thumbnails */}
        {data.images && data.images.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mt-4">
            {data.images.map((file, index) => (
              <div key={index}>
                <img
                  src={URL.createObjectURL(file)}
                  alt={`preview-${index}`}
                  className="h-32 w-full object-cover rounded border"
                />
                <p className="text-xs text-center mt-1 text-gray-600 truncate">{file.name}</p>
              </div>
            ))}
          </div>
        )}

        {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
};

export default Step1Upload;





