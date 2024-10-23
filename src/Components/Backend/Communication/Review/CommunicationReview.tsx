import React from 'react'
import FilterBar from '../../FilterBar/FilterBar';
import Review from '../../Review/Review';
// import im1 from '../../../../../../assets/ellipse-1.svg';
import { im1 } from '../../../images';


const CommunicationReview :React.FC= () => {
  const reviews = [
    {
      courseName: 'Beginners Guide to Design',
      userName: 'Chris Walter',
      daysAgo: '3 days ago',
      rating: 3,
      reviewText:
        'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging...',
      optionsIconSrc: im1,
    },
    {
      courseName: 'Data Warehouse - The Ultimate Guide',
      userName: 'Michel Evans',
      daysAgo: '3 days ago',
      rating: 5,
      reviewText:
        'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging...',
      optionsIconSrc: im1,
    },
    {
      courseName: 'Beginners Guide to Design',
      userName: 'Chris Walter',
      daysAgo: '3 days ago',
      rating: 3,
      reviewText:
        'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging...',
      optionsIconSrc: im1,
    },
    {
      courseName: 'Data Warehouse - The Ultimate Guide',
      userName: 'Michel Evans',
      daysAgo: '3 days ago',
      rating: 5,
      reviewText:
        'I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging...',
      optionsIconSrc: im1,
    },
    // Add more reviews here if needed
  ];
  return (
    <div>
      <FilterBar/>
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
  )
}

export default CommunicationReview;