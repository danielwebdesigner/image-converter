import React, { useState } from 'react';

export default function ImageConverter() {
  const [files, setFiles] = useState([]);

  const handleFiles = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFiles}
        className="mb-4"
      />
      {files.length > 0 && (
        <ul>
          {files.map((file, index) => (
            <li key={index} className="text-sm text-gray-700">{file.name}</li>
          ))}
        </ul>
      )}
      <p className="text-gray-500 text-sm mt-2">Conversão funcional apenas localmente por enquanto.</p>
    </div>
  );
}
