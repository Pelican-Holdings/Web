import React from 'react';

interface LoadingSpinnerProps {
  visible: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ visible }) => {
  return (
    visible && (
      <div className="loading-spinner-container">
        <div className="loading-spinner-circle"></div>
      </div>
    )
  );
};

export default LoadingSpinner;