import React from 'react';
import './LoadingAlert.css'
const LoadingAlert = () => {
  return (
    <div className="loading-alert">
      <p>Cargando imagen...</p>
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingAlert;
