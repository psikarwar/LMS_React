import React, { useState } from 'react';

interface PromotionNextProps {
  totalResults: number;
  resultsPerPage: number;
}

const PromotionNext: React.FC<PromotionNextProps> = ({ totalResults, resultsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-between items-center p-5 max-w-xl mx-auto">
      {/* Display total results */}
      <div className="text-sm font-normal text-gray-900">{totalResults} results</div>

      {/* Pagination Controls */}
      <div className="flex gap-3">
        {/* Previous Button */}
        <button
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-900'
          }`}
          onClick={handlePrev}
          disabled={currentPage === totalPages}
        >
          Prev
        </button>

        {/* Next Button */}
        <button
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-900'
          }`}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PromotionNext;
