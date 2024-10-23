import React, { useState } from 'react';
import { icondown, iconup } from '../../../images';
// import { iconsvg2img, iconsvg3img, iconsvg4img, iconsvg5img, iconsvgimg } from '../../../images';

type CategoryRatingProps = {
  title: string;
  content: React.ReactNode;
};

const CategoryRating: React.FC<CategoryRatingProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-[273px] mx-auto p-4 bg-white border border-gray-200 mb-4">
      <div 
        className="flex justify-between items-center cursor-pointer font-medium text-lg" 
        onClick={toggleSection}
      >
        {title}
        <img 
          src={isOpen ? iconup : icondown} 
          alt="Toggle icon"
          className="w-4 h-4"
        />
      </div>
      {isOpen && (
        <div className="pt-2">
          {content}
        </div>
      )}
    </div>
  );
};

// const FilterComponent: React.FC = () => {
//   const ratingsContent = (
//     <div className="space-y-2">
//       {/* Example ratings content (can be dynamically generated or fetched) */}
//       <div className="flex space-x-1">
//         <img src={iconsvgimg} alt="Star icon" />
//         <img src={iconsvg2img} alt="Star icon" />
//         <img src={iconsvg3img} alt="Star icon" />
//         <img src={iconsvg4img} alt="Star icon" />
//         <img src={iconsvg5img} alt="Star icon" />
//       </div>
//     </div>
//   );

//   const chaptersContent = (
//     <div className="space-y-2">
//       <div className="flex items-center space-x-3">
//         <input type="checkbox" id="chap1-10" />
//         <label htmlFor="chap1-10" className="text-base">1-10</label>
//       </div>
//       <div className="flex items-center space-x-3">
//         <input type="checkbox" id="chap10-15" />
//         <label htmlFor="chap10-15" className="text-base">10-15</label>
//       </div>
//       <div className="flex items-center space-x-3">
//         <input type="checkbox" id="chap15-20" />
//         <label htmlFor="chap15-20" className="text-base">15-20</label>
//       </div>
//       <div className="flex items-center space-x-3">
//         <input type="checkbox" id="chap20-25" />
//         <label htmlFor="chap20-25" className="text-base">20-25</label>
//       </div>
//       <button className="flex items-center text-blue-500 text-sm">
//         See More <img src="./assets/icon-down-chevron.svg" alt="See more icon" className="ml-1 w-4 h-4" />
//       </button>
//     </div>
//   );

//   const priceContent = <p className="text-base">Price filter coming soon!</p>;
//   const categoryContent = <p className="text-base">Category filter coming soon!</p>;

//   return (
//     <div>
//       <CategoryRating title="Rating" content={ratingsContent} />
//       <CategoryRating title="Number of Chapters" content={chaptersContent} />
//       <CategoryRating title="Price" content={priceContent} />
//       <CategoryRating title="Category" content={categoryContent} />
//     </div>
//   );
// };

export default CategoryRating;
