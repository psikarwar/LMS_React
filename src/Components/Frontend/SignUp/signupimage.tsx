import React from 'react';
import { girl } from '../../images';
const LearningImage: React.FC = () => {
  return (
    <div className=" inset-1 z-0">
      <img
        src={girl}
        alt="Learning"
        className="w-fit h-full object-left"
      />
    </div>
  );
};

export default LearningImage;


