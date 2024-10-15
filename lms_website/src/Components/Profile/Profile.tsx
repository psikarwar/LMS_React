// // import React from 'react';
// // import './Profile.css'; // Assuming you will use a CSS file for styling
// // // import ellipse from '../../../assets/ellipse-61-2.svg'
// // import pp from '../../assets/myassets/pp.svg'
// // import icon from '../../assets/myassets/iconshare.svg'
// // import line from '../../assets/myassets/line.svg'

// // const Profile: React.FC = () => {
// //   return (
// //     <div className="profile-container">
// //       <div className="profile-header">
// //         <img src={pp} alt="Profile" className="profile-image" />
// //         <h2 className="profile-name">John Doe</h2>
// //         <button className="share-button">
// //           <span>Share Profile</span>
// //           <img src={icon} alt="Share" className="share-icon" />
// //         </button>
// //       </div>
// //       <img src={line} alt="Line" className="divider" />
// //       <div className="profile-menu">
// //         <div className="menu-item">Profile</div>
// //         <div className="menu-item">My Courses</div>
// //         <div className="menu-item">Teachers</div>
// //         <div className="menu-item">Message</div>
// //         <div className="menu-item selected">My Reviews</div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;
// import React from 'react';
// import pp from '../../assets/myassets/pp.svg';
// import icon from '../../assets/myassets/iconshare.svg';
// import line from '../../assets/myassets/line.svg';

// const Profile: React.FC = () => {
//   return (
//     <div className="bg-slate-50 rounded-lg p-6 w-full max-w-sm mx-auto">
//       <div className="flex flex-col items-center gap-4">
//         <img src={pp} alt="Profile" className="w-40 h-40 rounded-full" />
//         <h2 className="font-semibold text-xl text-slate-900">John Doe</h2>
//         <button className="flex items-center gap-2 px-6 py-2 bg-white border border-gray-300 rounded-lg font-medium text-sm text-slate-900 cursor-pointer">
//           <span>Share Profile</span>
//           <img src={icon} alt="Share" className="w-6 h-6" />
//         </button>
//       </div>
//       <img src={line} alt="Line" className="w-full my-6" />
//       <div className="flex flex-col gap-2">
//         <div className="p-4 bg-slate-50 border border-gray-300 font-normal text-sm text-slate-700 cursor-pointer hover:bg-gray-100">
//           Profile
//         </div>
//         <div className="p-4 bg-slate-50 border border-gray-300 font-normal text-sm text-slate-700 cursor-pointer hover:bg-gray-100">
//           My Courses
//         </div>
//         <div className="p-4 bg-slate-50 border border-gray-300 font-normal text-sm text-slate-700 cursor-pointer hover:bg-gray-100">
//           Teachers
//         </div>
//         <div className="p-4 bg-slate-50 border border-gray-300 font-normal text-sm text-slate-700 cursor-pointer hover:bg-gray-100">
//           Message
//         </div>
//         <div className="p-4 bg-slate-900 text-white border border-gray-300 font-normal text-sm cursor-pointer">
//           My Reviews
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
// import React from 'react';
// import pp from '../../assets/myassets/pp.svg';
// import icon from '../../assets/myassets/iconshare.svg';
// import line from '../../assets/myassets/line.svg';

// const Profile: React.FC = () => {
//   return (
//     <div className="bg-slate-50 rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
//       <div className="flex flex-col items-center gap-4">
//         <img src={pp} alt="Profile" className="w-32 h-32 sm:w-40 sm:h-40 rounded-full" />
//         <h2 className="font-semibold text-lg sm:text-xl md:text-2xl text-slate-900">John Doe</h2>
//         <button className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white border border-gray-300 rounded-lg font-medium text-xs sm:text-sm md:text-base text-slate-900 cursor-pointer">
//           <span>Share Profile</span>
//           <img src={icon} alt="Share" className="w-5 sm:w-6" />
//         </button>
//       </div>
//       <img src={line} alt="Line" className="w-full my-4 sm:my-6 md:my-8" />
//       <div className="flex flex-col gap-2">
//         <div className="p-3 sm:p-4 bg-slate-50 border border-gray-300 font-normal text-xs sm:text-sm md:text-base text-slate-700 cursor-pointer hover:bg-gray-100">
//           Profile
//         </div>
//         <div className="p-3 sm:p-4 bg-slate-50 border border-gray-300 font-normal text-xs sm:text-sm md:text-base text-slate-700 cursor-pointer hover:bg-gray-100">
//           My Courses
//         </div>
//         <div className="p-3 sm:p-4 bg-slate-50 border border-gray-300 font-normal text-xs sm:text-sm md:text-base text-slate-700 cursor-pointer hover:bg-gray-100">
//           Teachers
//         </div>
//         <div className="p-3 sm:p-4 bg-slate-50 border border-gray-300 font-normal text-xs sm:text-sm md:text-base text-slate-700 cursor-pointer hover:bg-gray-100">
//           Message
//         </div>
//         <div className="p-3 sm:p-4 bg-slate-900 text-white border border-gray-300 font-normal text-xs sm:text-sm md:text-base cursor-pointer">
//           My Reviews
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React from 'react';
// import pp from '../../assets/myassets/pp.svg';
// import icon from '../../assets/myassets/iconshare.svg';
// import line from '../../assets/myassets/line.svg';
// const Profile: React.FC = () => {
//   return (
//     <section className="bg-slate-50 rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
//       <div className="flex flex-col items-center gap-4">
//              <img src={pp} alt="Profile" className="w-32 h-32 sm:w-40 sm:h-40 rounded-full" />
//          <h2 className="font-semibold text-lg sm:text-xl md:text-2xl text-slate-900">John Doe</h2>
//          <button className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white border border-gray-300 rounded-lg font-medium text-xs sm:text-sm md:text-base text-slate-900 cursor-pointer">
//            <span>Share Profile</span>
//            <img src={icon} alt="Share" className="w-5 sm:w-6" />
//          </button>
//        </div><img src={line} alt="Line" className="w-full my-4 sm:my-6 md:my-8" />
//       <nav className="flex flex-col gap-2">
//         <button className="p-3 sm:p-4 bg-slate-50 border border-gray-300 font-normal text-xs sm:text-sm md:text-base text-slate-700 cursor-pointer hover:bg-gray-100">
//           Profile
//         </button>
//         <button className="p-3 sm:p-4 bg-slate-50 border border-gray-300 font-normal text-xs sm:text-sm md:text-base text-slate-700 cursor-pointer hover:bg-gray-100">
//           My Courses
//         </button>
//         <button className="p-3 sm:p-4 bg-slate-50 border border-gray-300 font-normal text-xs sm:text-sm md:text-base text-slate-700 cursor-pointer hover:bg-gray-100">
//           Teachers
//         </button>
//         <button className="p-3 sm:p-4 bg-slate-50 border border-gray-300 font-normal text-xs sm:text-sm md:text-base text-slate-700 cursor-pointer hover:bg-gray-100">
//           Message
//         </button>
//         <button className="p-3 sm:p-4 bg-slate-900 text-white border border-gray-300 font-normal text-xs sm:text-sm md:text-base cursor-pointer">
//           My Reviews
//         </button>
//       </nav>
//     </section>
//   );
// };

// export default Profile;
import React from 'react';
import pp from '../../assets/myassets/pp.svg';
import icon from '../../assets/myassets/iconshare.svg';
import line from '../../assets/myassets/line.svg';

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
