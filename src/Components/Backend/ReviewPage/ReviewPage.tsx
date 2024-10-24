// import React from 'react'
// import Badge from '../Badge/Badge'
// import Review from '../Review/Review'
// import './ReviewPage.css'
// import im1 from '../../../../../assets/ellipse-1.svg'

// const ReviewPage: React.FC  = () => {
//   return (
//     <div>
//          <section className="badges">
//         <Badge label="Total Reviews" value="1000" />
//         <Badge label="1 star reviews" value="100" color="#ef4444" />
//         <Badge label="2 star reviews" value="100" color="#ca8a04" />
//         <Badge label="3 star reviews" value="100" color="#facc15" />
//         <Badge label="4 star reviews" value="100" color="#4ade80" />
//         <Badge label="5 star reviews" value="100" color="#16a34a" />
//       </section>
//       <section className="reviews">
//         <Review
//           courseName="Beginners Guide to Design"
//           userName="Chris Walter"
//           daysAgo="3 days ago"
//           rating={5}
//           reviewText="I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging..."
//           optionsIconSrc={im1}
//         />
//         <Review
//                   courseName="Data Warehouse - The Ultimate Guide"
//                   userName="Michel Evans"
//                   daysAgo="3 days ago"
//                   rating={5}
//                   reviewText="I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging..."
//                    optionsIconSrc={im1}   
//                         />
//         {/* Add more Review components as needed */}
//       </section>
//     </div>
//   )
// }

// export default ReviewPage
import React from 'react';
import Badge from '../Badge/Badge';
import Review from '../Review/Review';
import { ellipse61 } from '../../images';

const ReviewPage: React.FC = () => {
  // Array of review data
  const reviews = [
    {
      courseName: 'Beginners Guide to Design',
      userName: 'Chris Walter',
      daysAgo: '3 days ago',
      rating: 3,
      reviewText:
        'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging...',
      optionsIconSrc: ellipse61,
    },
    {
      courseName: 'Data Warehouse - The Ultimate Guide',
      userName: 'Michel Evans',
      daysAgo: '3 days ago',
      rating: 5,
      reviewText:
        'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging...',
      optionsIconSrc: ellipse61,
    },
    // Add more reviews here if needed
  ];

  return (
    <div className="p-4"> {/* Adding padding for the overall container */}
      {/* Badge Section */}
      <section className="flex flex-wrap gap-9 mb-6"> {/* Adjusted gap for better spacing */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5"> {/* Responsive width for badges */}
          <Badge label="Total Reviews" value="1000" color='#000000' />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/5">
          <Badge label="1 Star Reviews" value="100" color="#ef4444" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
          <Badge label="2 Star Reviews" value="100" color="#ca8a04" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
          <Badge label="3 Star Reviews" value="100" color="#facc15" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
          <Badge label="4 Star Reviews" value="100" color="#4ade80" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
          <Badge label="5 Star Reviews" value="100" color="#16a34a" />
        </div>
      </section>

      {/* Review Section */}
      <section className="flex flex-col gap-5 px-4 sm:px-6 lg:px-8">
        {reviews.map((review, index) => (
          <Review
            key={index} // Add key prop for unique identification
            courseName={review.courseName}
            userName={review.userName}
            daysAgo={review.daysAgo}
            rating={review.rating}
            reviewText={review.reviewText}
            optionsIconSrc={review.optionsIconSrc}
          />
        ))}
      </section>
    </div>
  );
};

export default ReviewPage;
