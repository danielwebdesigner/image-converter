import React from 'react';
import ImageConverter from './ImageConverter';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Conversor de Imagens</h1>
      <ImageConverter />
    </div>
  );
}
