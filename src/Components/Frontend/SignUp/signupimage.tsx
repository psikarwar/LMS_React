import React from 'react';
import { girl } from '../../images';

const LearningImage: React.FC = () => {
  return (
    <div className="relative w-full h-auto">
      <img
        src={girl}
        alt="Learning"
        className="w-full h-auto object-contain" // Changed to object-contain for better responsiveness
      />
    </div>
  );
};

export default LearningImage;
