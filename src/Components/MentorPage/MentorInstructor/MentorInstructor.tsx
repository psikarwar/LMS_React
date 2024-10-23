// import React from 'react';
// import img1 from '../../../assets/Ellipse 53.svg';

// interface MentorInstructorProps {
//   name: string;
//   role: string;
//   description: string;
//   totalStudents: number;
//   reviews: number;
//   imageSrc: string; // Add imageSrc to the props
// }

// const MentorInstructor: React.FC<MentorInstructorProps> = ({
//   name,
//   role,
//   description,
//   totalStudents,
//   reviews, // Destructure the imageSrc prop
// }) => {
//   return (
//     <div className="flex flex-col lg:flex-row gap-4 text-slate-700 p-4 lg:p-8">
//       <div className="flex flex-col gap-1 lg:w-1/2"> {/* Takes half the width on larger screens */}
//         <p className="text-sm font-normal leading-6">{role}</p>
//         <div className="flex flex-col gap-6">
//           <h1 className="text-2xl font-semibold text-slate-900 leading-tight">{name}</h1>
//           <p className="text-sm font-normal leading-6">{description}</p>
//         </div>
//         <div className="flex justify-between gap-10 md:gap-32">
//           <div className="flex flex-col items-center gap-2">
//             <p className="text-sm font-normal leading-6">Total Students</p>
//             <p className="text-2xl font-semibold text-slate-900 leading-snug">{totalStudents}</p>
//           </div>
//           <div className="flex flex-col items-center gap-2">
//             <p className="text-sm font-normal leading-6">Reviews</p>
//             <p className="text-2xl font-semibold text-slate-900 leading-snug">{reviews}</p>
//           </div>
//         </div>
//       </div>
      
//       {/* Image section on the right */}
//       <div className="flex justify-end items-center lg:w-1/2"> {/* Takes half the width on larger screens */}
//         <img src={img1} alt={name} className="rounded-lg shadow-md max-w-full h-auto" /> {/* Responsive image */}
//       </div>
//     </div>
//   );
// };

// export default MentorInstructor;






import React from 'react';
import { elipse53img } from '../../images';

interface MentorInstructorProps {
  name: string;
  role: string;
  totalStudents: number;
  reviews: number;
  description: string;
  expertise: string[];
  experience: string;
  imageSrc: string;
  links: {
    website: string;
    twitter: string;
    youtube: string;
  };
}

const MentorInstructor: React.FC<MentorInstructorProps> = ({
  name,
  role,
  totalStudents,
  reviews,
  description,
  expertise,
  experience,
  links,
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 text-slate-700 p-6 lg:p-12">
      {/* Left content */}
      <div className="lg:w-2/3">
        <p className="text-sm font-normal leading-6">{role}</p>
        <h1 className="text-3xl font-semibold text-slate-900 leading-tight mt-2">{name}</h1>

        {/* Stats */}
        <div className="flex gap-10 mt-4">
          <div className="flex flex-col items-center">
            <p className="text-sm font-normal leading-6">Total Students</p>
            <p className="text-2xl font-semibold text-slate-900">{totalStudents}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm font-normal leading-6">Reviews</p>
            <p className="text-2xl font-semibold text-slate-900">{reviews}</p>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-slate-900">About {name}</h2>
          <p className="text-sm font-normal leading-6 mt-2">{description}</p>
        </div>

        {/* Areas of Expertise */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-slate-900">Areas of Expertise</h2>
          <ul className="list-disc list-inside mt-2 space-y-2">
            {expertise.map((item, index) => (
              <li key={index} className="text-sm font-normal leading-6">{item}</li>
            ))}
          </ul>
        </div>

        {/* Professional Experience */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-slate-900">Professional Experience</h2>
          <p className="text-sm font-normal leading-6 mt-2">{experience}</p>
        </div>
      </div>

      {/* Right image and links */}
      <div className="lg:w-1/3 flex flex-col items-center lg:items-start">
        <img
          src={elipse53img}
          alt={name}
          className="rounded-full shadow-md w-40 h-40 lg:w-52 lg:h-52 object-cover"
        />
        <div className="flex flex-col gap-2 mt-6">
          <a
            href={links.website}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md shadow text-center w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
          <a
            href={links.twitter}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md shadow text-center w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href={links.youtube}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md shadow text-center w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentorInstructor;

