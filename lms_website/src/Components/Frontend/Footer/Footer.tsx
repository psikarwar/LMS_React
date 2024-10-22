// import React from 'react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-slate-800 text-slate-300 py-10 px-20">
//       <div className="max-w-7xl mx-auto flex justify-between gap-16">
//         <div className="max-w-xs">
//           <img src="./assets/image-4.svg" alt="Byway Logo" className="w-28 h-10" />
//           <p className="mt-4 text-sm leading-relaxed">
//             Empowering learners through accessible and engaging online education. Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences.
//           </p>
//         </div>
//         <div className="max-w-xs">
//           <h3 className="text-lg font-semibold text-slate-100 mb-4">Get Help</h3>
//           <ul>
//             <li className="mt-2">Contact Us</li>
//             <li className="mt-2">Latest Articles</li>
//             <li className="mt-2">FAQ</li>
//           </ul>
//         </div>
//         <div className="max-w-xs">
//           <h3 className="text-lg font-semibold text-slate-100 mb-4">Programs</h3>
//           <ul>
//             <li className="mt-2">Art & Design</li>
//             <li className="mt-2">Business</li>
//             <li className="mt-2">IT & Software</li>
//             <li className="mt-2">Languages</li>
//             <li className="mt-2">Programming</li>
//           </ul>
//         </div>
//         <div className="max-w-xs">
//           <h3 className="text-lg font-semibold text-slate-100 mb-4">Contact Us</h3>
//           <ul>
//             <li className="mt-2">Address: 123 Main Street, Anytown, CA 12345</li>
//             <li className="mt-2">Tel: +(123) 456-7890</li>
//             <li className="mt-2">Mail: bywayedu@webkul.in</li>
//           </ul>
//           <img src="./assets/image-3.svg" alt="Social Media" className="w-72 h-10 mt-6" />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;







import React from 'react';
import logo from '../../../../assets/logo.svg';
import { Link } from 'react-router-dom';
const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 py-10 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* About Section */}
        <div>
          <Link to="/" className='flex justify-center items-center'>
          <img src={logo} alt="Logo" className="w-8 h-10 text-lg font-medium" /> Byway
          <span className="ml-1 text-lg font-medium text-slate-800">Byway</span> </Link>
          <p className="mt-4 text-sm leading-relaxed">
            Empowering learners through accessible and engaging online education. Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences.
          </p>
        </div>

        {/* Get Help Section */}
        <div>
          <h3 className="text-lg font-semibold text-slate-100 mb-4">Get Help</h3>
          <ul>
            <li className="mt-2">
              <a href="#">Contact Us</a>
            </li>
            <li className="mt-2">
              <a href="#">Latest Articles</a>
            </li>
            <li className="mt-2">
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Programs Section */}
        <div>
          <h3 className="text-lg font-semibold text-slate-100 mb-4">Programs</h3>
          <ul>
            <li className="mt-2">
              <a href="#">Art & Design</a>
            </li>
            <li className="mt-2">
              <a href="#">Business</a>
            </li>
            <li className="mt-2">
              <a href="#">IT & Software</a>
            </li>
            <li className="mt-2">
              <a href="#">Languages</a>
            </li>
            <li className="mt-2">
              <a href="#">Programming</a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold text-slate-100 mb-4">Contact Us</h3>
          <ul>
            <li className="mt-2">Address: 123 Main Street, Anytown, CA 12345</li>
            <li className="mt-2">Tel: +(123) 456-7890</li>
            <li className="mt-2">Mail: bywayedu@webkul.in</li>
          </ul>
          <img src="./assets/image-3.svg" alt="Social Media" className="w-56 h-8 mt-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
