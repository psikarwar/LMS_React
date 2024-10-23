
import React, { useState } from 'react';
// import im1 from '../../../../../assets/rectangle-1128.svg';
import { icondown, im1 } from '../../images';

const ProfilePage: React.FC = () => {
  // State to handle image preview and file
  const [imagePreview, setImagePreview] = useState<string>(im1); // Default image
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Handle image upload and preview
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveImage = () => {
    if (imageFile) {
      console.log('Saving image:', imageFile);
      // Logic to save or send the image file to the server can go here
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-col md:flex-row px-2 py-4">
        <section className="flex-1">
          {/* Personal Information Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-5 mb-5">
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

          {/* Image Upload Section */}
          <div className="w-full bg-white rounded-lg border border-gray-200 p-5 mb-5">
            <h3 className="font-semibold text-lg leading-tight text-gray-900 mb-5">Image Preview</h3>
            <div className="bg-gray-200 p-2 rounded-lg mb-5">
              <img src={imagePreview} alt="Preview" className="w-full h-auto rounded" />
            </div>
            <h4 className="font-semibold text-lg leading-tight text-gray-900 mb-5">Add/Change Image</h4>
            <div className="flex flex-col md:flex-row items-center mb-5">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mb-2 md:mb-0"
              />
            </div>
            <button
              onClick={handleSaveImage}
              className="bg-gray-900 text-white rounded-lg py-2 px-6 font-medium text-sm leading-6 cursor-pointer"
            >
              Save Image
            </button>
          </div>

          {/* Social Links Section */}
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

// Input component for text, textarea, or select inputs
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
        <img src={icondown} alt="Chevron" className="cursor-pointer" />
      </div>
    ) : (
      <input className="w-full p-2 border border-gray-200 rounded-lg" type="text" />
    )}
  </div>
);

// Input component for social links
const LinkInput: React.FC<{ label: string }> = ({ label }) => (
  <div className="mb-5">
    <label className="block mb-1 font-medium">{label}</label>
    <input className="w-full p-2 border border-gray-200 rounded-lg" type="text" />
  </div>
);

export default ProfilePage;
