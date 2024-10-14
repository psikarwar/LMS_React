import React from 'react';

interface OrderReviewProps {
  overview: string;
  learningObjectives: string[];
}

const OrderReview: React.FC<OrderReviewProps> = ({ overview, learningObjectives }) => {
  return (
    <div className="p-5">
      {/* Course Overview Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">Course Overview</h2>
        <div className="max-w-full w-full md:w-[840px] text-gray-700">
          {overview}
        </div>
      </div>

      {/* Key Learning Objectives Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">Key Learning Objectives</h2>
        <ul className="list-disc ml-5 md:ml-10 max-w-full w-full md:w-[840px] text-gray-700">
          {learningObjectives.map((objective, index) => (
            <li key={index} className="mb-2">{objective}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderReview;
