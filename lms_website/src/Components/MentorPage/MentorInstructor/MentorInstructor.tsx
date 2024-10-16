import React from 'react';
import img1 from '../../../assets/Ellipse 53.svg';

interface MentorInstructorProps {
  name: string;
  role: string;
  description: string;
  totalStudents: number;
  reviews: number;
  imageSrc: string; // Add imageSrc to the props
}

const MentorInstructor: React.FC<MentorInstructorProps> = ({
  name,
  role,
  description,
  totalStudents,
  reviews,
  imageSrc, // Destructure the imageSrc prop
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 text-slate-700">
      <div className="flex flex-col gap-1 lg:w-1/2"> {/* Make sure this div takes half the width on larger screens */}
        <p className="text-sm font-normal leading-6">{role}</p>
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-semibold text-slate-900 leading-tight">{name}</h1>
          <p className="text-sm font-normal leading-6">{description}</p>
        </div>
        <div className="flex justify-between gap-32">
          <div className="flex flex-col items-center gap-5">
            <p className="text-sm font-normal leading-6">Total Students</p>
            <p className="text-2xl font-semibold text-slate-900 leading-snug">{totalStudents}</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <p className="text-sm font-normal leading-6">Reviews</p>
            <p className="text-2xl font-semibold text-slate-900 leading-snug">{reviews}</p>
          </div>
        </div>
      </div>
      
      {/* Image section on the right */}
      <div className="g:w-1/2 flex justify-center items-center"> {/* Make sure this div takes half the width on larger screens */}
        <img src={img1} alt={name} className="rounded-lg shadow-md max-w-full h-auto" /> {/* Responsive image */}
      </div>
    </div>
  );
};

export default MentorInstructor;
