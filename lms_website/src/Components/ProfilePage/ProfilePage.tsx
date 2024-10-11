// import React from 'react';
// import './ProfilePage.css'; // Import custom CSS for styling

// const ProfilePage: React.FC = () => {
//   return (
//     <div className="ProfilePage">
//       <header className="ProfilePage-header">
//         <div className="logo">
//           <img src="./assets/logo.svg" alt="Logo" />
//           <span>Byway</span>
//         </div>
//         <nav className="ProfilePage-nav">
//           <span>Categories</span>
//           <div className="search-bar">
//             <img src="./assets/heroicons-magnifying-glass-20-solid.svg" alt="Search" />
//             <input type="text" placeholder="Search courses" />
//           </div>
//           <span>Teach on Byway</span>
//           <div className="icons">
//             <img src="./assets/heart.svg" alt="Favorite" />
//             <img src="./assets/icon-cart.svg" alt="Cart" />
//             <img src="./assets/bell-01.svg" alt="Notifications" />
//             <img className="profile-icon" src="./assets/ellipse-4.svg" alt="Profile" />
//             <span className="initials">J</span>
//           </div>
//         </nav>
//       </header>
      
//       <main className="main-content">
//         <aside className="profile-sidebar">
//           <img src="./assets/ellipse-53.svg" alt="Profile" className="profile-image" />
//           <h2>John Doe</h2>
//           <button className="button">Share Profile</button>
//           <ul className="sidebar-menu">
//             <li className="active">Profile</li>
//             <li>My Courses</li>
//             <li>Teachers</li>
//             <li>Message</li>
//             <li>My Reviews</li>
//           </ul>
//         </aside>
        
//         <section className="profile-section">
//           <div className="basic-info">
//             <h3>Basic Info</h3>
//             <div className="form-row">
//               <Input label="First Name" />
//               <Input label="Last Name" />
//             </div>
//             <div className="form-row">
//               <Input label="Headline" />
//             </div>
//             <div className="form-row">
//               <Input label="Description" textarea />
//             </div>
//             <div className="form-row">
//               <Input label="Language" select />
//             </div>
//           </div>

//           {/* <div className="image-section">
//             <h3>Image Preview</h3>
//             <div className="image-preview">
//               <img src="./assets/rectangle-1128.svg" alt="Preview" />
//               <button className="button upload">Upload Image</button>
//             </div>
//             <button className="button save">Save Image</button>
//           </div> */}
//               <div className="w-[950px] bg-white rounded-lg border border-gray-200 p-5">
//       <h3 className="font-semibold text-lg leading-tight text-gray-900 mb-5">Image Preview</h3>
//       <div className="bg-gray-200 p-2 rounded-lg mb-5">
//         <img src="./assets/rectangle-1128.svg" alt="Preview" className="w-full h-auto rounded" />
//       </div>
//       <h4 className="font-semibold text-lg leading-tight text-gray-900 mb-5">Add/Change Image</h4>
//       <div className="flex items-center mb-5">
//         <input
//           type="text"
//           placeholder="Label"
//           className="flex-1 p-4 rounded-lg border border-gray-200 mr-2"
//         />
//         <button className="bg-white text-gray-900 border border-gray-900 rounded-lg py-2 px-6 font-medium text-sm leading-6 cursor-pointer">
//           Upload Image
//         </button>
//       </div>
//       <button className="bg-gray-900 text-white rounded-lg py-2 px-6 font-medium text-sm leading-6 cursor-pointer">
//         Save Image
//       </button>
//     </div>

//           <div className="links-section">
//             <h3>Links</h3>
//             <LinkInput label="Website" />
//             <LinkInput label="X(Formerly Twitter)" />
//             <LinkInput label="LinkedIn" />
//             <LinkInput label="YouTube" />
//             <LinkInput label="Facebook" />
//           </div>
//         </section>
//       </main>

//       <footer className="app-footer">
//         <div className="footer-content">
//           <div className="footer-section">
//             <img src="./assets/image-4.svg" alt="Logo" />
//             <p>
//               Empowering learners through accessible and engaging online education.
//               Byway is a leading online learning platform dedicated to providing
//               high-quality, flexible, and affordable educational experiences.
//             </p>
//           </div>
//           <div className="footer-links">
//             <h3>Get Help</h3>
//             <ul>
//               <li>Contact Us</li>
//               <li>Latest Articles</li>
//               <li>FAQ</li>
//             </ul>
//           </div>
//           <div className="footer-links">
//             <h3>Programs</h3>
//             <ul>
//               <li>Art & Design</li>
//               <li>Business</li>
//               <li>IT & Software</li>
//               <li>Languages</li>
//               <li>Programming</li>
//             </ul>
//           </div>
//           <div className="footer-contact">
//             <h3>Contact Us</h3>
//             <p>Address: 123 Main Street,Anytown,CA 12345</p>
//             <p>Tel: +(123) 456-7890</p>
//             <p>Mail: bywayedu@webkul.in</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// interface InputProps {
//   label: string;
//   textarea?: boolean;
//   select?: boolean;
// }

// const Input: React.FC<InputProps> = ({ label, textarea, select }) => (
//   <div className="input-group">
//     <label>{label}</label>
//     {textarea ? (
//       <textarea className="input-field" rows={4}></textarea>
//     ) : select ? (
//       <div className="select-wrapper">
//         <select className="input-field">
//           <option>English</option>
//         </select>
//         <img src="./assets/icon-down-chevron.svg" alt="Chevron" />
//       </div>
//     ) : (
//       <input className="input-field" type="text" />
//     )}
//   </div>
// );

// const LinkInput: React.FC<{ label: string }> = ({ label }) => (
//   <div className="link-input-group">
//     <label>{label}</label>
//     <input className="input-field" type="text" />
//   </div>
// );

// export default ProfilePage;
import React from 'react';
import './ProfilePage.css'; // If you're still using any custom CSS
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';

const ProfilePage: React.FC = () => {
  return (
    <div className="bg-white">
     <Header/>
      
      <main className="flex p-5">
        {/* <aside className="w-80 bg-gray-100 rounded-lg p-6 mr-5">
          <img src="./assets/ellipse-53.svg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h2 className="text-center text-xl font-semibold">John Doe</h2>
          <button className="bg-blue-900 text-white rounded-lg py-2 px-6 w-full my-4">Share Profile</button>
          <ul className="list-none">
            <li className="py-4 border-b border-gray-200 cursor-pointer bg-blue-900 text-white">Profile</li>
            <li className="py-4 cursor-pointer">My Courses</li>
            <li className="py-4 cursor-pointer">Teachers</li>
            <li className="py-4 cursor-pointer">Message</li>
            <li className="py-4 cursor-pointer">My Reviews</li>
          </ul>
        </aside> */}
        <Profile/>
        
        <section className="flex-1">
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-5">
            <h3 className="font-semibold text-lg leading-tight text-gray-900 mb-5">Basic Info</h3>
            <div className="flex gap-4 mb-5">
              <Input label="First Name" />
              <Input label="Last Name" />
            </div>
            <div className="mb-5">
              <Input label="Headline" />
            </div>
            <div className="mb-5">
              <Input label="Description" textarea />
            </div>
            <div className="mb-5">
              <Input label="Language" select />
            </div>
          </div>

          <div className="w-[950px] bg-white rounded-lg border border-gray-200 p-5 mb-5">
            <h3 className="font-semibold text-lg leading-tight text-gray-900 mb-5">Image Preview</h3>
            <div className="bg-gray-200 p-2 rounded-lg mb-5">
              <img src="./assets/rectangle-1128.svg" alt="Preview" className="w-full h-auto rounded" />
            </div>
            <h4 className="font-semibold text-lg leading-tight text-gray-900 mb-5">Add/Change Image</h4>
            <div className="flex items-center mb-5">
              <input
                type="text"
                placeholder="Label"
                className="flex-1 p-4 rounded-lg border border-gray-200 mr-2"
              />
              <button className="bg-white text-gray-900 border border-gray-900 rounded-lg py-2 px-6 font-medium text-sm leading-6 cursor-pointer">
                Upload Image
              </button>
            </div>
            <button className="bg-gray-900 text-white rounded-lg py-2 px-6 font-medium text-sm leading-6 cursor-pointer">
              Save Image
            </button>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="font-semibold text-lg leading-tight text-gray-900 mb-5">Links</h3>
            <LinkInput label="Website" />
            <LinkInput label="X(Formerly Twitter)" />
            <LinkInput label="LinkedIn" />
            <LinkInput label="YouTube" />
            <LinkInput label="Facebook" />
          </div>
        </section>
      </main>
      <Footer/>

    </div>
  );
};

interface InputProps {
  label: string;
  textarea?: boolean;
  select?: boolean;
}

const Input: React.FC<InputProps> = ({ label, textarea, select }) => (
  <div className="mb-5">
    <label className="block mb-1 font-medium">{label}</label>
    {textarea ? (
      <textarea className="w-full p-2 border border-gray-200 rounded-lg" rows={4}></textarea>
    ) : select ? (
      <div className="flex items-center">
        <select className="w-full p-2 border border-gray-200 rounded-lg mr-2">
          <option>English</option>
        </select>
        <img src="./assets/icon-down-chevron.svg" alt="Chevron" className="cursor-pointer" />
      </div>
    ) : (
      <input className="w-full p-2 border border-gray-200 rounded-lg" type="text" />
    )}
  </div>
);

const LinkInput: React.FC<{ label: string }> = ({ label }) => (
  <div className="mb-5">
    <label className="block mb-1 font-medium">{label}</label>
    <input className="w-full p-2 border border-gray-200 rounded-lg" type="text" />
  </div>
);

export default ProfilePage;
