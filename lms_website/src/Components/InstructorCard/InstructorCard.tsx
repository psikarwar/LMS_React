// // InstructorCard.tsx
// import React from 'react';
// import './InstructorCard.css'
// interface InstructorCardProps {
//   name: string;
//   title: string;
//   imageSrc: string;
//   mailIconSrc: string;
// }

// const InstructorCard: React.FC<InstructorCardProps> = ({ name, title, imageSrc, mailIconSrc }) => (
//   <div className="instructor-card">
//     <img src={imageSrc} alt="Instructor" />
//     <div className="card-content">
//       <h3>{name}</h3>
//       <p>{title}</p>
//     </div>
//     <button className="button send-message">
//       Send Message
//       <img src={mailIconSrc} alt="Mail Icon" />
//     </button>
//   </div>
// );

// export default InstructorCard;
import React from 'react';

interface InstructorCardProps {
  name: string;
  title: string;
  imageSrc: string;
  mailIconSrc: string;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ name, title, imageSrc, mailIconSrc }) => (
  <div className="flex-1 min-w-[21%] bg-white border border-gray-300 rounded-lg p-4 text-center">
    <img src={imageSrc} alt="Instructor" className="mx-auto mb-4" />
    <div className="card-content">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-500">{title}</p>
    </div>
    <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md flex justify-center items-center gap-2">
      Send Message
      <img src={mailIconSrc} alt="Mail Icon" className="w-4 h-4" />
    </button>
  </div>
);

export default InstructorCard;
