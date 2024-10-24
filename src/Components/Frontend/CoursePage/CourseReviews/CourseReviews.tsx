import React from 'react';
import { elipse19img, iconsvg2img, iconsvg3img, iconsvgimg, phosphorimg } from '../../../images';

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
    <div className="flex flex-col md:flex-row gap-8 font-inter text-gray-700 p-6 rounded-lg shadow-md mx-auto max-w-6xl">
      {/* Average Rating Section */}
      <div className="w-full md:w-1/3 bg-white rounded-lg p-4 shadow-md">
        <div className="flex items-center gap-2 font-semibold text-2xl text-gray-900">
          <img src={iconsvgimg} alt="Average rating" className="w-8 h-8" />
          <span>{averageRating.toFixed(1)}</span>
          <span className="text-sm">({totalReviews} reviews)</span>
        </div>
        <div className="mt-4">
          {ratingBreakdown.map((item) => (
            <div key={item.rating} className="flex items-center gap-2 text-sm">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    src={index < item.rating ? iconsvg2img : iconsvg3img}
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

      {/* Reviews List Section */}
      <div className="flex flex-col gap-6 w-full md:w-2/3 md:self-end">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
        <button className="px-6 py-2 border border-gray-900 rounded-lg bg-transparent font-medium text-sm text-gray-900 hover:bg-gray-200 self-center md:self-start">
          View more Reviews
        </button>
      </div>
    </div>
  );
};

const ReviewCard: React.FC<Review> = ({ reviewerName, rating, reviewDate, reviewText }) => {
  return (
    <div className="w-full bg-white rounded-lg border border-gray-300 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 md:max-w-full">
      <div className="flex items-center gap-3 mb-4">
        <img src={elipse19img} alt="Reviewer" className="w-12 h-12 rounded-full border-2 border-gray-200" />
        <div className="flex flex-col">
          <span className="font-semibold text-lg text-gray-900">{reviewerName}</span>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <img src={phosphorimg} alt="Star" className="w-5 h-5" />
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
