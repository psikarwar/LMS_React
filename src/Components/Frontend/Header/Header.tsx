// import React from 'react';
// import { Link } from 'react-router-dom';
// import { logo } from '../../images';
// import { magnifyingglass } from '../../images';
// import { iconcart } from '../../images';

// const Header: React.FC = () => {
//   return (
//     <header className="flex items-center justify-between px-4 py-4 bg-white border-b border-slate-800 md:px-10 lg:px-20">
//       {/* Logo Section */}
//       <div className="flex items-center">
//         <Link to="/" className='flex justify-center items-center'>
//           <img src={logo} alt="Logo" className="w-8 h-10" />
       
//         <span className="ml-1 text-lg font-medium text-slate-800">Byway</span> </Link>
//       </div>

//       {/* Navigation */}
//       <nav className="flex items-center">
//         {/* Categories - Hidden on small screens */}
//         <Link to="category">
//         <span className="hidden mx-2 text-base font-medium text-slate-800 md:block md:mx-6 lg:mx-10">
//           Categories
//           </span>
//           </Link>

//         {/* Search Bar - Hidden on small screens, visible on md+ */}
//         <div className="hidden md:flex items-center px-4 py-2 border rounded-lg border-slate-800 lg:px-6">
//           <img
//             src={magnifyingglass}
//             alt="Search"
//             className="w-5 h-5"
//           />
//           <input
//             type="text"
//             placeholder="Search courses"
//             className="ml-3 border-none outline-none text-sm font-normal w-40 lg:w-96"
//           />
//         </div>

//         {/* Search Icon for Mobile View */}
//         <img
//           src={magnifyingglass}
//           alt="Search Icon"
//           className="w-5 h-5 ml-4 md:hidden"
//         />

//         {/* Teach on Byway - Hidden on small screens */}
//          <Link to="/">
//         <span className="hidden mx-6 text-base font-medium text-slate-800 lg:block">
//           Teach on Byway
//           </span>
//           </Link>

//         {/* Cart Icon */}
//         <Link to ="shopping">
//         <img src={iconcart} alt="Cart" className="w-6 h-6 mr-6" /> </Link>

//         {/* Log In Button */}
//         <Link to="/login">
//           <button className="px-4 py-2 mr-2 text-sm font-medium border rounded-md border-slate-800 text-slate-800">
//             Log In
//           </button>
//         </Link>

//         {/* Sign Up Button */}
//         <Link to="/signup">
//           <button className="px-4 py-2 text-sm font-medium text-white bg-slate-800 rounded-md">
//             Sign Up
//           </button>
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;











import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../images';
import { magnifyingglass } from '../../images';
import { iconcart } from '../../images';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-white border-b border-slate-800 md:px-10 lg:px-16 xl:px-20">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link to="/" className='flex justify-center items-center'>
          <img src={logo} alt="Logo" className="w-8 h-10" />
          <span className="ml-1 text-lg font-medium text-slate-800">Byway</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex items-center">
        {/* Categories - Hidden on small screens */}
        <Link to="/category">
          <span className="hidden mx-2 text-base font-medium text-slate-800 md:block md:mx-4 lg:mx-6">
            Categories
          </span>
        </Link>

        {/* Search Bar - Hidden on small screens, visible on md+ */}
        <div className="hidden md:flex items-center px-4 py-2 border rounded-lg border-slate-800 lg:px-4 xl:px-6">
          <img
            src={magnifyingglass}
            alt="Search"
            className="w-5 h-5"
          />
          <input
            type="text"
            placeholder="Search courses"
            className="ml-3 border-none outline-none text-sm font-normal w-40 lg:w-64 xl:w-96"
          />
        </div>

        {/* Search Icon for Mobile View */}
        <img
          src={magnifyingglass}
          alt="Search Icon"
          className="w-5 h-5 ml-4 md:hidden"
        />

        {/* Teach on Byway - Hidden on small screens */}
        <Link to="/">
          <span className="hidden mx-4 text-base font-medium text-slate-800 lg:block">
            Teach on Byway
          </span>
        </Link>

        {/* Cart Icon */}
        <Link to="shopping">
          <img src={iconcart} alt="Cart" className="w-6 h-6 mr-4 lg:mr-6" />
        </Link>

        {/* Log In Button */}
        <Link to="/login">
          <button className="px-3 py-2 text-sm font-medium border rounded-md border-slate-800 text-slate-800 lg:px-4 lg:py-2 lg:mr-2">
            Log In
          </button>
        </Link>

        {/* Sign Up Button */}
        <Link to="/signup">
          <button className="px-3 py-2 text-sm font-medium text-white bg-slate-800 rounded-md lg:px-4 lg:py-2">
            Sign Up
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
