import React from 'react';

interface InstructorCardProps {
  name: string;
  title: string;
  imageSrc: string;
  mailIconSrc: string;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ name, title, imageSrc, mailIconSrc }) => (
  <div className="flex flex-col bg-white border border-gray-300 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
    <img 
      src={imageSrc} 
      alt="Instructor" 
      className="mx-auto mb-4 w-24 h-24 object-cover rounded-full" 
    />
    <div className="card-content">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-500 text-sm md:text-base">{title}</p>
    </div>
    <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md flex justify-center items-center gap-2 hover:bg-blue-700 transition-colors duration-300">
      Send Message
      <img src={mailIconSrc} alt="Mail Icon" className="w-4 h-4" />
    </button>
  </div>
);

export default InstructorCard;

// import React from 'react';

// interface InstructorCardProps {
//   name: string;
//   title: string;
//   imageSrc: string;
//   mailIconSrc: string;
// }

// const InstructorCard: React.FC<InstructorCardProps> = ({ name, title, imageSrc, mailIconSrc }) => (
//   <div className="flex-1 min-w-[21%] bg-white border border-gray-300 rounded-lg p-4 text-center">
//     <img src={imageSrc} alt="Instructor" className="mx-auto mb-4" />
//     <div className="card-content">
//       <h3 className="text-xl font-semibold">{name}</h3>
//       <p className="text-gray-500">{title}</p>
//     </div>
//     <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md flex justify-center items-center gap-2">
//       Send Message
//       <img src={mailIconSrc} alt="Mail Icon" className="w-4 h-4" />
//     </button>
//   </div>
// );

// export default InstructorCard;
