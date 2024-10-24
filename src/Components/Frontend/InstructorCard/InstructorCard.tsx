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
//   <div className="flex flex-col bg-white border border-gray-300 rounded-lg p-4 sm:p-6 md:p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300 max-w-xs sm:max-w-sm md:max-w-md mx-auto">
//     {/* Instructor Image */}
//     <img 
//       src={imageSrc} 
//       alt="Instructor" 
//       className="mx-auto mb-4 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover rounded-full" 
//     />

//     {/* Instructor Name and Title */}
//     <div className="card-content">
//       <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{name}</h3>
//       <p className="text-gray-500 text-xs sm:text-sm md:text-base">{title}</p>
//     </div>

//     {/* Send Message Button */}
//     <button className="mt-4 bg-blue-600 text-white py-2 px-4 sm:py-3 sm:px-5 rounded-md flex justify-center items-center gap-2 hover:bg-blue-700 transition-colors duration-300">
//       Send Message
//       <img src={mailIconSrc} alt="Mail Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
//     </button>
//   </div>
// );

// export default InstructorCard;
