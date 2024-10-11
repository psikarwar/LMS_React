import React from 'react';

// Define the types for props
interface Review {
  reviewerName: string;
  rating: number;
  reviewDate: string;
  reviewText: string;
}

interface CourseReviewsProps {
  averageRating: number;
  totalReviews: number;
  ratingBreakdown: { percentage: number; rating: number }[];
  reviews: Review[];
}

const CourseReviews: React.FC<CourseReviewsProps> = ({
  averageRating,
  totalReviews,
  ratingBreakdown,
  reviews,
}) => {
  return (
    <div className="flex gap-36 font-inter text-gray-700">
      <div className="w-64">
        <div className="flex items-center gap-2 font-semibold text-2xl text-gray-900">
          <img src="./assets/icon.svg" alt="Average rating" />
          <span>{averageRating.toFixed(1)}</span>
          <span>{totalReviews} reviews</span>
        </div>
        <div className="mt-4">
          {ratingBreakdown.map((item) => (
            <div key={item.rating} className="flex items-center gap-2 text-sm">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    src={index < item.rating ? './assets/icon-2.svg' : './assets/icon-3.svg'}
                    alt="Star"
                    className="w-5 h-5"
                  />
                ))}
              </div>
              <span>{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
        <button className="px-6 py-2 border border-gray-900 rounded-lg bg-transparent font-medium text-sm text-gray-900 hover:bg-gray-200">
          View more Reviews
        </button>
      </div>
    </div>
  );
};

const ReviewCard: React.FC<Review> = ({ reviewerName, rating, reviewDate, reviewText }) => {
  return (
    <div className="w-[949px] bg-white rounded-lg border border-gray-300 p-6">
      <div className="flex items-center gap-3">
        <img src="./assets/ellipse-19.svg" alt="Reviewer" />
        <div className="flex flex-col">
          <span className="font-semibold text-lg text-gray-900">{reviewerName}</span>
          <div className="flex items-center gap-1 text-sm">
            <img src="./assets/phosphor-icons-star.svg" alt="Star" className="w-5 h-5" />
            <span>{rating}</span>
            <span>Reviewed on {reviewDate}</span>
          </div>
        </div>
      </div>
      <p className="mt-3 text-base text-gray-700">{reviewText}</p>
    </div>
  );
};

export default CourseReviews;
