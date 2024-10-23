import React from 'react'
import { im1 } from '../../../../images';
import { rect1086img } from '../../../../images';
import { NavLink } from 'react-router-dom';


const NotificationSend: React.FC = () => {
    return (
        <div className="flex flex-col gap-4 p-4 font-sans">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-900">Communication</h1>
                <div className="flex items-center gap-3">
                    <NavLink to ="/back-course">
                    <button className="bg-blue-600 text-white rounded-lg py-2 px-6 text-sm">Add Course</button></NavLink>
                    <img src={im1} alt="options" className="w-6 h-6" />
                </div>
            </div>

            {/* <div className="flex gap-2 border-b border-gray-200">
                <div className="py-4 text-gray-500 cursor-pointer">Reviews</div>
                <div className="py-4 text-gray-500 cursor-pointer">Messages</div>
                <div className="py-4 text-blue-500 border-b-2 border-blue-500 cursor-pointer">Notification</div>
            </div> */}

            <div className="flex justify-between items-center">
                <span className="text-sm text-blue-500">Communication / Notification / Announcement</span>
                <div className="flex gap-2">
                    <button className="bg-gray-50 border border-gray-200 rounded-lg py-2 px-6 text-gray-900 text-sm">Draft</button>
                    <button className="bg-green-600 text-white rounded-lg py-2 px-6 text-sm">Save</button>
                    <button className="bg-blue-600 text-white rounded-lg py-2 px-6 text-sm">Publish</button>
                </div>
            </div>

            <div className="bg-white p-6 w-3/6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Create Announcement</h2>

                <InputField  label="Notification Status" value="Published" icon="./assets/icon-down-chevron.svg"  />
                <InputField label="Notification Title" value="20% Flat Off for first 100 Students" />
                <InputField label="Description" value="Buy NCERT Solutions for Class 12 Chemistry and Get 20% off on your course. Only first hundred students can avail this offer. Hurry!" />
                <InputField label="Link" value="https://test.com/courses" />
                <InputField label="Customer Group" value="All Group" icon="./assets/icon-down-chevron-2.svg" />

                <div className="mt-6">
                    <span className="text-sm text-gray-700 mb-2 block">Upload Thumbnail</span>
                    <div className="flex flex-col items-center p-5 rounded-lg border border-gray-200 bg-white">
                        <img src={rect1086img} alt="upload" className="w-6 h-6 mb-3" />
                        <span className="text-lg font-semibold text-gray-900 text-center">
                            Drag and drop files, or <span className="text-blue-500 cursor-pointer">Browse</span>
                        </span>
                        <span className="text-sm text-gray-900 opacity-50 text-center">Upload Thumbnail in JPEG, PNG.</span>
                    </div>
                </div>
            </div>
        </div>
      
      
      
    )
};

 interface InputFieldProps {
  label: string;
  value: string;
  icon?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, icon }) => (
  <div className="mb-4">
    <label className="text-sm text-gray-700 mb-2 block">{label}</label>
    <div className="flex items-center p-2 border border-gray-200 rounded-lg bg-white">
      <span className="flex-grow text-base text-gray-900">{value}</span>
      {icon && <img src={icon} alt="dropdown" className="w-6 h-6" />}
    </div>
  </div>
);

export default NotificationSend