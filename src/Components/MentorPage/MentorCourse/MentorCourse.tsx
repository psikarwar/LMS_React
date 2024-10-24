import React from 'react';

interface Course {
  title: string;
  author: string;
  ratings: number;
  totalRatings: number;
  totalHours: string;
  totalLectures: number;
  level: string;
  price: string;
}

const MentorCourse: React.FC = () => {
  const courses: Course[] = [
    {
      title: "Beginner’s Guide to Design",
      author: "Ronald Richards",
      ratings: 5,
      totalRatings: 1200,
      totalHours: "22",
      totalLectures: 155,
      level: "Beginner",
      price: "$149.9",
    },
    
    
    // Add more courses as needed
  ];

  return (
    <div className="bg-slate-50 py-10 px-4 md:px-20"> {/* Responsive padding */}
      <h2 className="text-2xl font-semibold leading-relaxed mb-6 text-center">
        More Courses by <span className="text-blue-600">Ronald Richards</span>
      </h2>
      <div className="flex items-center justify-between mb-6"> {/* Justify space between buttons */}
        <button className="bg-slate-400 rounded-lg p-3 hidden md:flex"> {/* Hidden on smaller screens */}
          <img src="./assets/icon-left-chevron.svg" alt="Previous" className="w-6 h-6" />
        </button>
        <button className="bg-slate-400 rounded-lg p-3 hidden md:flex"> {/* Hidden on smaller screens */}
          <img src="./assets/icon-chevron-right.svg" alt="Next" className="w-6 h-6" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Change to grid layout */}
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 min-w-[266px] flex-shrink-0"> {/* Flex-shrink to allow cards to resize */}
      <img
        src="./assets/rectangle-1080.svg"
        alt="Course"
        className="w-full h-[139px] rounded-lg" 
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-slate-900">{course.title}</h3>
        <p className="text-sm text-slate-600">By {course.author}</p>
        <div className="flex items-center mt-2">
          {Array.from({ length: course.ratings }, (_, i) => (
            <img key={i} src={`./assets/icon-${i + 2}.svg`} alt="Star" className="w-5 h-5" />
          ))}
          <span className="text-xs ml-2 text-slate-600">({course.totalRatings} Ratings)</span>
        </div>
        <p className="text-sm text-slate-600 mt-2">
          {course.totalHours} Total Hours. {course.totalLectures} Lectures. {course.level}
        </p>
        <p className="text-xl font-semibold text-slate-900 mt-4">{course.price}</p>
      </div>
    </div>
  );
};

export default MentorCourse;
