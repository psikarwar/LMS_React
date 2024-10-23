
// import React from 'react';
// import { icon2,icon3,icon4,icon5,icon6 } from '../../images';
// interface ReviewCardProps {
//   courseName: string;
//   rating: number;
//   reviewText: string;
//   reviewerName: string;
//   optionsIconSrc: string;
// }

// const ReviewCard: React.FC<ReviewCardProps> = ({ courseName, rating, reviewText, reviewerName, optionsIconSrc }) => (
//   <div className="bg-white border border-gray-300 rounded-xl p-4">
//     <div className="flex justify-between items-center">
//       <div className="course-info">
//         <span>Course Name: </span>
//         <strong>{courseName}</strong>
//       </div>
//       <img src={optionsIconSrc} alt="Options" className="options-icon" />
//     </div>
//     <div className="mt-4">
//       <span>Rating: </span>
//       <div className="flex">
//         {[...Array(5)].map((_, index) => (
//           <img
//             key={index}
//             src={`../../../assets/icon-${index + 2}.svg`}
            
//             alt="Star"
//             className={index < rating ? "opacity-100" : "opacity-30"}
//           />
//         ))}
//       </div>
//     </div>
//     <div className="mt-4">
//       <span>Review: </span>
//       <p>
//         {reviewText} — <strong>{reviewerName}</strong>
//       </p>
//     </div>
//   </div>
// );

// export default ReviewCard;
import React from 'react';
import { icon2, icon3, icon4, icon5, icon6 } from '../../images';

interface ReviewCardProps {
  courseName: string;
  rating: number;
  reviewText: string;
  reviewerName: string;
  optionsIconSrc: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ courseName, rating, reviewText, reviewerName, optionsIconSrc }) => {
  // Array of star icons
  const starIcons = [icon2, icon3, icon4, icon5, icon6];

  return (
    <div className="bg-white border border-gray-300 rounded-xl p-4">
      <div className="flex justify-between items-center">
        <div className="course-info">
          <span>Course Name: </span>
          <strong>{courseName}</strong>
        </div>
        <img src={optionsIconSrc} alt="Options" className="options-icon" />
      </div>
      <div className="mt-4">
        <span>Rating: </span>
        <div className="flex">
          {starIcons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`Star ${index + 1}`}
              className={index < rating ? "opacity-100" : "opacity-30"}
            />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <span>Review: </span>
        <p>
          {reviewText} — <strong>{reviewerName}</strong>
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
