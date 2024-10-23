


import React from 'react'
import icon1 from '../../../../assets/Backend/detail/playsquare.svg';
import iconp from '../../../../assets/Backend/detail/iconplus.svg';
import richt from '../../../../assets/Backend/detail/richtext.svg';
import rect from '../../../../assets/Backend/detail/rectangle1026.svg';
import iconx from '../../../../assets/Backend/detail/iconx.svg'
import addimage from '../../../../assets/Backend/detail/Addimage.svg';
import downarrow from '../../../../assets/Backend/detail/downarrow.svg';

const Details: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4 font-inter  mt-10 mr-20">
        <span className="text-lg font-semibold text-gray-900">Details</span>
        <div className="flex gap-2">
          <button className="bg-white text-gray-900 py-2.5 px-6 border border-gray-200 rounded-lg cursor-pointer text-sm font-medium">
            Draft
          </button>
          <button className="bg-green-600 text-white py-2.5 px-6 rounded-lg cursor-pointer text-sm font-medium">
            Save
          </button>
          <button className="bg-blue-500 text-white py-2.5 px-6 rounded-lg cursor-pointer text-sm font-medium">
            Publish
          </button>
        </div>
      </div>

      <div className="flex gap-6 font-inter  mr-20">
        {/* Left Column - 80% width */}
        <div className="flex flex-col gap-4 p-6 w-4/5">
          <h2 className="text-xl font-semibold text-gray-900">Course Details</h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-normal text-gray-600">Course Name</label>
              <input
                type="text"
                defaultValue="NCERT Solutions for Class 12 Chemistry"
                className="p-2 border border-gray-200 rounded-lg text-base text-gray-900 w-5/6"
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-normal text-gray-600">Upload Intro Video</span>
              <div className="p-5 border border-gray-200 bg-white rounded-lg flex flex-col items-center gap-3 text-center w-5/6">
                <img src={icon1} alt="Upload Video Icon" className="w-6 h-6" />
                <span className="text-lg font-semibold text-gray-900">
                  Drag and drop files, or <span className="text-blue-500 cursor-pointer">Browse</span>
                </span>
                <span className="text-sm font-normal text-gray-900 opacity-50">
                  Upload Video in Mov, MP4.
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-normal text-gray-600">Upload Intro Image</span>
              <div className="p-5 border border-gray-200 bg-white rounded-lg flex flex-col items-center gap-3 text-center w-5/6">
                <img src={addimage} alt="Upload Image Icon" className="w-6 h-6" />
                <span className="text-lg font-semibold text-gray-900">
                  Drag and drop files, or <span className="text-blue-500 cursor-pointer">Browse</span>
                </span>
                <span className="text-sm font-normal text-gray-900 opacity-50">
                  Upload Thumbnail in JPEG, PNG.
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <div className="p-4 border-b-2 border-blue-500 text-blue-500 text-sm font-medium">Description</div>
                <div className="p-4 text-gray-500 text-sm font-medium">Syllabus</div>
                <div className="p-4 text-gray-500 text-sm font-medium">FAQ's</div>
              </div>
              <button className="flex items-right gap-1  py-6 bg-transparent text-blue-600 text-sm font-medium rounded-lg  -mr-52 ">
                Add Section
                <img src={iconp} alt="Add Icon" className="w-6 h-6" />
              </button>
            </div>

            <div className="bg-white rounded-lg overflow-hidden">
              <img src={richt} alt="Rich Text Editor" className="w-5/6" />
              <img src={rect} alt="Rich Text Editor" className="w-5/6" />
            </div>
          </div>
        </div>

        {/* Right Column - 20% width */}
        <div className="flex flex-col gap-3 p-1 w-1/3 mt-5 mr-8">
          <div className="bg-white rounded-lg p-2 border border-gray-200">
            <label className="text-sm text-gray-700 mb-2 block">Course Price</label>
            <div className="flex items-center justify-between">
              <span className="text-base text-gray-900">$ 199.00</span>
            </div>
          </div>

          <div className="bg-white rounded-lg p-2 border border-gray-200">
            <label className="text-sm text-gray-700 mb-2 block">Language</label>
            <div className="flex items-center justify-between relative">
              <span className="text-base text-gray-900">English</span>
              <img src={downarrow} alt="dropdown" className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-1 border border-gray-200">
            <label className="text-sm text-gray-700 mb-2 block">CC</label>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1 p-2 bg-gray-100 rounded-lg border border-gray-200">
                <span className="text-xs font-semibold text-gray-900">English</span>
                <img src={iconx} alt="remove" className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-1 p-2 bg-gray-100 rounded-lg border border-gray-200">
                <span className="text-xs font-semibold text-gray-900">Spanish</span>
                <img src={iconx} alt="remove" className="w-4 h-4" />
              </div>
               <img src={downarrow} alt="dropdown" className="w-6 h-6 ml-24" />
            </div>
          </div>

          <div className="bg-white rounded-lg p-2 border border-gray-200">
            <label className="text-sm text-gray-700 mb-2 block">Level</label>
            <div className="flex items-center justify-between relative">
              <span className="text-base text-yellow-500">Beginner</span>
              <img src={downarrow} alt="dropdown" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details;
