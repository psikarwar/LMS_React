import React from 'react';

interface ReviewProps {
  courseName: string;
  userName: string;
  daysAgo: string;
  rating: number;
  reviewText: string;
  optionsIconSrc: string;
}

const Review: React.FC<ReviewProps> = ({
  courseName,
  userName,
  daysAgo,
  rating,
  reviewText,
  optionsIconSrc,
}) => (
  <div className="p-6 bg-white border border-gray-300 rounded-lg lg:w-full sm:w-11/12 md:w-4/5 lg:w-2/3  ">
    <div className="mb-4">
      <div className="mt-4 flex items-center">
        <span className="mr-2 text-sm sm:text-base">Rating: </span>
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src={`./assets/icon-${index + 2}.svg`}
              alt="Star"
              className={`w-4 h-4 sm:w-5 sm:h-5 ${index < rating ? 'opacity-100' : 'opacity-30'}`}
            />
          ))}
        </div>
      </div>
      <h3 className="text-base sm:text-lg font-semibold">Course Name: {courseName}</h3>
    </div>
    <div className="flex items-center gap-2 mb-3">
      <img src={optionsIconSrc} alt="user avatar" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" />
      <div>
        <p className="font-medium text-sm sm:text-base">{userName}</p>
        <p className="text-gray-500 text-xs sm:text-sm">{daysAgo}</p>
      </div>
    </div>
    <p className="text-gray-700 opacity-80 font-normal text-sm sm:text-base">{reviewText}</p>
  </div>
);

export default Review;

// import React from 'react';
// import './Review.css';

// interface ReviewProps {
//   courseName: string;
//   userName: string;
//   daysAgo: string;
//   rating: number;
//   reviewText: string;
//   optionsIconSrc: string;

// }

// const Review: React.FC<ReviewProps> = ({ courseName, userName, daysAgo, rating, reviewText,optionsIconSrc }) => (
//   <div className="review">
//     <div className="header">
//       <div className="mt-4 flex">
//       <span>Rating: </span>
//       <div className="flex">
//         {[...Array(5)].map((_, index) => (
//           <img
//             key={index}
//             src={`./assets/icon-${index + 2}.svg`}
//             alt="Star"
//             className={index < rating ? "opacity-100" : "opacity-30"}
//           />
//         ))}
//       </div>
//     </div>
//       <h3>Course Name: {courseName}</h3>
//     </div>
//     <div className="userInfo">
//       <img src={optionsIconSrc} alt="user avatar" />
//       <div>
//         <p>{userName}</p>
//         <p>{daysAgo}</p>
//       </div>
//     </div>
//     <p className="reviewText">{reviewText}</p>
//   </div>
// );

// export default Review;
