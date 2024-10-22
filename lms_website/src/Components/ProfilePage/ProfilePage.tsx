import React from 'react';
// import './ProfilePage.css'; // If you're still using any custom CSS
import im1 from '../../../../assets/rectangle-1128.svg'
const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex flex-col md:flex-row p-5">
        <section className="flex-1">
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-5">
            <h3 className="font-semibold text-lg leading-tight text-gray-900 mb-5">Basic Info</h3>
            <div className="flex flex-col md:flex-row md:gap-4 mb-5">
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

          <div className="w-full bg-white rounded-lg border border-gray-200 p-5 mb-5">
            <h3 className="font-semibold text-lg leading-tight text-gray-900 mb-5">Image Preview</h3>
            <div className="bg-gray-200 p-2 rounded-lg mb-5">
              <img src={im1 } alt="Preview" className="w-full h-auto rounded" />
            </div>
            <h4 className="font-semibold text-lg leading-tight text-gray-900 mb-5">Add/Change Image</h4>
            <div className="flex flex-col md:flex-row items-center mb-5">
              <input
                type="text"
                placeholder="Label"
                className="flex-1 p-4 rounded-lg border border-gray-200 mr-0 md:mr-2 mb-2 md:mb-0"
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
    </div>
  );
};

interface InputProps {
  label: string;
  textarea?: boolean;
  select?: boolean;
}

const Input: React.FC<InputProps> = ({ label, textarea, select }) => (
  <div className="mb-5 flex-1">
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

// import React from 'react';
// // import './ProfilePage.css'; // If you're still using any custom CSS

// const ProfilePage: React.FC = () => {
//   return (
//     <div className="bg-white">
      
//       <main className="flex p-5">

        
//         <section className="flex-1">
//           <div className="bg-white rounded-lg border border-gray-200 p-5 mb-5">
//             <h3 className="font-semibold text-lg leading-tight text-gray-900 mb-5">Basic Info</h3>
//             <div className="flex gap-4 mb-5">
//               <Input label="First Name" />
//               <Input label="Last Name" />
//             </div>
//             <div className="mb-5">
//               <Input label="Headline" />
//             </div>
//             <div className="mb-5">
//               <Input label="Description" textarea />
//             </div>
//             <div className="mb-5">
//               <Input label="Language" select />
//             </div>
//           </div>

//           <div className="w-[950px] bg-white rounded-lg border border-gray-200 p-5 mb-5">
//             <h3 className="font-semibold text-lg leading-tight text-gray-900 mb-5">Image Preview</h3>
//             <div className="bg-gray-200 p-2 rounded-lg mb-5">
//               <img src="./assets/rectangle-1128.svg" alt="Preview" className="w-full h-auto rounded" />
//             </div>
//             <h4 className="font-semibold text-lg leading-tight text-gray-900 mb-5">Add/Change Image</h4>
//             <div className="flex items-center mb-5">
//               <input
//                 type="text"
//                 placeholder="Label"
//                 className="flex-1 p-4 rounded-lg border border-gray-200 mr-2"
//               />
//               <button className="bg-white text-gray-900 border border-gray-900 rounded-lg py-2 px-6 font-medium text-sm leading-6 cursor-pointer">
//                 Upload Image
//               </button>
//             </div>
//             <button className="bg-gray-900 text-white rounded-lg py-2 px-6 font-medium text-sm leading-6 cursor-pointer">
//               Save Image
//             </button>
//           </div>

//           <div className="bg-white rounded-lg border border-gray-200 p-5">
//             <h3 className="font-semibold text-lg leading-tight text-gray-900 mb-5">Links</h3>
//             <LinkInput label="Website" />
//             <LinkInput label="X(Formerly Twitter)" />
//             <LinkInput label="LinkedIn" />
//             <LinkInput label="YouTube" />
//             <LinkInput label="Facebook" />
//           </div>
//         </section>
//       </main>

//     </div>
//   );
// };

// interface InputProps {
//   label: string;
//   textarea?: boolean;
//   select?: boolean;
// }

// const Input: React.FC<InputProps> = ({ label, textarea, select }) => (
//   <div className="mb-5">
//     <label className="block mb-1 font-medium">{label}</label>
//     {textarea ? (
//       <textarea className="w-full p-2 border border-gray-200 rounded-lg" rows={4}></textarea>
//     ) : select ? (
//       <div className="flex items-center">
//         <select className="w-full p-2 border border-gray-200 rounded-lg mr-2">
//           <option>English</option>
//         </select>
//         <img src="./assets/icon-down-chevron.svg" alt="Chevron" className="cursor-pointer" />
//       </div>
//     ) : (
//       <input className="w-full p-2 border border-gray-200 rounded-lg" type="text" />
//     )}
//   </div>
// );

// const LinkInput: React.FC<{ label: string }> = ({ label }) => (
//   <div className="mb-5">
//     <label className="block mb-1 font-medium">{label}</label>
//     <input className="w-full p-2 border border-gray-200 rounded-lg" type="text" />
//   </div>
// );

// export default ProfilePage;
