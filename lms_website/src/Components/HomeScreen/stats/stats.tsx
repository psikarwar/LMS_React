
import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    { number: '250+', text: 'Courses by our best mentors' },
    { number: '1000+', text: 'Courses by our best mentors' },
    { number: '15+', text: 'Courses by our best mentors' },
    { number: '2400+', text: 'Courses by our best mentors' },
  ];

  return (
    <div className="flex justify-evenly items-center py-12  bg-gray-50" style={{marginLeft : "-6.125rem"}}>
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="text-2xl font-semibold text-gray-900">{stat.number}</div>
          <div className="text-sm font-normal text-gray-900 mt-1">{stat.text}</div>
          {index < stats.length - 1 && (
            // Divider line between the stats
            <div className="mx-auto w-[55px] h-0 border-4 border-[#E2E8F0] rotate-90 order-1 flex-grow-0 ml-80   " style={{marginTop: "-1rem"}}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatsSection;