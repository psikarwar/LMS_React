import React from 'react';
import LearningImage from './signupimage';
import SignUpForm from './SignupForm';

const Signup: React.FC = () => {
  return (
    <div className="max-w-screen-3xl">
      {/* Header */}
    

      {/* Main content container */}
      <div className="relative flex flex-col lg:flex-row justify-center items-center lg:items-start h-auto lg:h-auto px-4 md:px-10 lg:px-20 py-8">
        {/* Learning image (adjust to take full width on smaller screens) */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <LearningImage />
        </div>

        {/* Signup form (stacked below the image on small screens) */}
        <div className="w-full  lg:w-1/2   lg:mb-0 bg-white ">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;




// import React from 'react';
// import LearningImage from './signupimage';
// import SignUpForm from './SignupForm';

// const Signup: React.FC = () => {
//   return (
//     <div className="max-w-screen-3xl mx-auto px-4 md:px-8 lg:px-16 py-8">
//       {/* Main content container */}
//       <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-8">
//         {/* Learning image */}
//         <div className="w-full lg:w-1/3">
//           <LearningImage />
//         </div>

//         {/* Signup form */}
//         <div className="w-full lg:w-1/2 bg-white p-6 shadow-lg rounded-lg">
//           <SignUpForm />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
