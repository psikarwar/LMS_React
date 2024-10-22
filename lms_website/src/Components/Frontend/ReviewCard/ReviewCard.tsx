// // ReviewCard.tsx
// import React from 'react';

// interface ReviewCardProps {
//   courseName: string;
//   rating: number;
//   reviewText: string;
//   reviewerName: string;
//   optionsIconSrc: string;
// }

// const ReviewCard: React.FC<ReviewCardProps> = ({ courseName, rating, reviewText, reviewerName, optionsIconSrc }) => (
//   <div className="review-card">
//     <div className="card-header">
//       <div className="course-info">
//         <span>Course Name: </span>
//         <strong>{courseName}</strong>
//       </div>
//       <img src={optionsIconSrc} alt="Options" className="options-icon" />
//     </div>
//     <div className="rating">
//       <span>Rating: </span>
//       <div className="stars">
//         {[...Array(5)].map((_, index) => (
//           <img key={index} src={`./assets/icon-${index + 1}.svg`} alt="Star" className={index < rating ? "active-star" : ""} />
//         ))}
//       </div>
//     </div>
//     <div className="review">
//       <span>Review: </span>
//       <p>
//         {reviewText} — <strong>{reviewerName}</strong>
//       </p>
//     </div>
//   </div>
// );

// export default ReviewCard;
import React from 'react';
// import star from '../../../assets/icon-2.svg'

interface ReviewCardProps {
  courseName: string;
  rating: number;
  reviewText: string;
  reviewerName: string;
  optionsIconSrc: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ courseName, rating, reviewText, reviewerName, optionsIconSrc }) => (
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
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={`../../../assets/icon-${index + 2}.svg`}
            
            alt="Star"
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

export default ReviewCard;
