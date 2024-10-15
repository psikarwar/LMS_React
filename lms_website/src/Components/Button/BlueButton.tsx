import React from 'react';

interface BlueButtonProps {
  buttonText: string;
  onClick: () => void;
}

const BlueButton: React.FC<BlueButtonProps> = ({ buttonText, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default BlueButton;
