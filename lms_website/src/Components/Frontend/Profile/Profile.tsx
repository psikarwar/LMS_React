// import React from 'react';
// import pp from '../../../assets/myassets/pp.svg';
// import icon from '../../../assets/myassets/iconshare.svg';
// import line from '../../../assets/myassets/line.svg';

// interface ProfileProps {
//   activeSection?: string;
//   setActiveSection: (section: string) => void;
// }

// const Profile: React.FC<ProfileProps> = ({ activeSection, setActiveSection }) => {
//   return (
//     <section className="bg-slate-50 rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-xs">
//       <div className="flex flex-col items-center gap-4">
//         <img src={pp} alt="Profile" className="w-32 h-32 sm:w-40 sm:h-40 rounded-full" />
//         <h2 className="font-semibold text-lg sm:text-xl md:text-2xl text-slate-900">John Doe</h2>
//         <button className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white border border-gray-300 rounded-lg font-medium text-xs sm:text-sm md:text-base text-slate-900 cursor-pointer">
//           <span>Share Profile</span>
//           <img src={icon} alt="Share" className="w-5 sm:w-6" />
//         </button>
//       </div>
//       <img src={line} alt="Line" className="w-full my-4 sm:my-6 md:my-8" />

//       {/* Navigation Buttons */}
//       <nav className="flex flex-col gap-2">
//         <button
//           className={`p-3 sm:p-4 border border-gray-300 font-normal text-xs sm:text-sm md:text-base cursor-pointer ${
//             activeSection === 'Profile' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-700 hover:bg-gray-100'
//           }`}
//           onClick={() => setActiveSection('Profile')}
//         >
//           Profile
//         </button>
//         <button
//           className={`p-3 sm:p-4 border border-gray-300 font-normal text-xs sm:text-sm md:text-base cursor-pointer ${
//             activeSection === 'My Courses' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-700 hover:bg-gray-100'
//           }`}
//           onClick={() => setActiveSection('My Courses')}
//         >
//           My Courses
//         </button>
//         <button
//           className={`p-3 sm:p-4 border border-gray-300 font-normal text-xs sm:text-sm md:text-base cursor-pointer ${
//             activeSection === 'Teachers' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-700 hover:bg-gray-100'
//           }`}
//           onClick={() => setActiveSection('Teachers')}
//         >
//           Teachers
//         </button>
//         <button
//           className={`p-3 sm:p-4 border border-gray-300 font-normal text-xs sm:text-sm md:text-base cursor-pointer ${
//             activeSection === 'Message' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-700 hover:bg-gray-100'
//           }`}
//           onClick={() => setActiveSection('Message')}
//         >
//           Message
//         </button>
//         <button
//           className={`p-3 sm:p-4 border border-gray-300 font-normal text-xs sm:text-sm md:text-base cursor-pointer ${
//             activeSection === 'My Reviews' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-700 hover:bg-gray-100'
//           }`}
//           onClick={() => setActiveSection('My Reviews')}
//         >
//           My Reviews
//         </button>
//       </nav>
//     </section>
//   );
// };

// export default Profile;
import React from 'react';
import pp from '../../../assets/myassets/pp.svg';
import icon from '../../../assets/myassets/iconshare.svg';
import line from '../../../assets/myassets/line.svg';

interface ProfileProps {
  activeSection?: string;
  setActiveSection: (section: string) => void;
}

const Profile: React.FC<ProfileProps> = ({ activeSection, setActiveSection }) => {
  return (
    <section className="bg-slate-50 rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-xs">
      <div className="flex flex-col items-center gap-4">
        <img src={pp} alt="Profile" className="w-32 h-32 sm:w-40 sm:h-40 rounded-full" />
        <h2 className="font-semibold text-lg sm:text-xl md:text-2xl text-slate-900">John Doe</h2>
        <button className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white border border-gray-300 rounded-lg font-medium text-xs sm:text-sm md:text-base text-slate-900 cursor-pointer">
          <span>Share Profile</span>
          <img src={icon} alt="Share" className="w-5 sm:w-6" />
        </button>
      </div>
      <img src={line} alt="Line" className="w-full my-4 sm:my-6 md:my-8" />

      {/* Navigation Buttons */}
      <nav className="flex flex-col gap-2">
        <button
          className={`p-3 sm:p-4 border border-gray-300 font-normal text-xs sm:text-sm md:text-base cursor-pointer ${
            activeSection === 'Profile' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-700 hover:bg-gray-100'
          }`}
          onClick={() => setActiveSection('Profile')}
        >
          Profile
        </button>
        <button
          className={`p-3 sm:p-4 border border-gray-300 font-normal text-xs sm:text-sm md:text-base cursor-pointer ${
            activeSection === 'My Courses' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-700 hover:bg-gray-100'
          }`}
          onClick={() => setActiveSection('My Courses')}
        >
          My Courses
        </button>
        <button
          className={`p-3 sm:p-4 border border-gray-300 font-normal text-xs sm:text-sm md:text-base cursor-pointer ${
            activeSection === 'Teachers' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-700 hover:bg-gray-100'
          }`}
          onClick={() => setActiveSection('Teachers')}
        >
          Teachers
        </button>
        <button
          className={`p-3 sm:p-4 border border-gray-300 font-normal text-xs sm:text-sm md:text-base cursor-pointer ${
            activeSection === 'Message' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-700 hover:bg-gray-100'
          }`}
          onClick={() => setActiveSection('Message')}
        >
          Message
        </button>
        <button
          className={`p-3 sm:p-4 border border-gray-300 font-normal text-xs sm:text-sm md:text-base cursor-pointer ${
            activeSection === 'My Reviews' ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-700 hover:bg-gray-100'
          }`}
          onClick={() => setActiveSection('My Reviews')}
        >
          My Reviews
        </button>
      </nav>
    </section>
  );
};

export default Profile;
