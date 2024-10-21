import React from 'react';

type CourseCardProps = {
  image: string;
  title: string;
  author: string;
  ratingCount: number;
  totalHours: string;
  totalLectures: string;
  level: string;
  price: string;
};

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  author,
  ratingCount,
  totalHours,
  totalLectures,
  level,
  price,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-300 p-4 w-1/4 max-w-xs">
      {/* Adjust image size */}
      <img src={image} alt={title} className="w-full h-32 rounded-lg object-cover" />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{author}</p>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <img key={i} src="./assets/icon.svg" alt="Star" className="w-4 h-4 mr-1" />
          ))}
          <span className="ml-2 text-sm font-semibold text-gray-500">({ratingCount} Ratings)</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {totalHours} Total Hours · {totalLectures} Lectures · {level}
        </p>
        <p className="text-xl font-semibold text-gray-900 mt-2">{price}</p>
      </div>
    </div>
  );
};

const CoursesLike: React.FC = () => {
  const courses = [
    {
      image: './assets/rectangle-1080.svg',
      title: "Beginner’s Guide to Design",
      author: 'By Ronald Richards',
      ratingCount: 1200,
      totalHours: '22',
      totalLectures: '155',
      level: 'Beginner',
      price: '$149.9',
    },
    {
      image: './assets/rectangle-1080.svg',
      title: 'Advanced UX Design',
      author: 'By Alice Johnson',
      ratingCount: 950,
      totalHours: '18',
      totalLectures: '120',
      level: 'Intermediate',
      price: '$199.9',
    },
    {
      image: './assets/rectangle-1080.svg',
      title: 'Advanced UX Design',
      author: 'By Alice Johnson',
      ratingCount: 950,
      totalHours: '18',
      totalLectures: '120',
      level: 'Intermediate',
      price: '$199.9',
    },
    {
      image: './assets/rectangle-1080.svg',
      title: 'Advanced UX Design',
      author: 'By Alice Johnson',
      ratingCount: 950,
      totalHours: '18',
      totalLectures: '120',
      level: 'Intermediate',
      price: '$199.9',
    },
  ];

  return (
    <div className="p-6 font-sans text-gray-900">
      <h2 className="text-xl font-semibold mb-6">More Courses Like This</h2>
      {/* Adjust layout: Smaller gap and ensure all 4 cards are in the same row */}
      <div className="flex gap-2 justify-between">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesLike;
