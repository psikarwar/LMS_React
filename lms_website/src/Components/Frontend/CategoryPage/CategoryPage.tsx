import DesignCourse from './DesignCourse/DesignCourse';
// import PopularMentor from './PopularMentor/PopularMentor';
import PopularMentors from './PopularMentor/PopularMentor';
import FeaturedCourses from './FeaturedCourse/FeaturedCourse';

// Mentor data arrays
const mentorsSet1 = [
  {
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    rating: '4.9',
    students: '2400 Students',
    image: './assets/rectangle-1136.svg', // replace with actual image path
  },
  {
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    rating: '4.9',
    students: '2400 Students',
    image: './assets/rectangle-1136.svg', // replace with actual image path
  },
  {
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    rating: '4.9',
    students: '2400 Students',
    image: './assets/rectangle-1136.svg', // replace with actual image path
  },
  {
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    rating: '4.9',
    students: '2400 Students',
    image: './assets/rectangle-1136.svg', // replace with actual image path
  },
  {
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    rating: '4.9',
    students: '2400 Students',
    image: './assets/rectangle-1136.svg', // replace with actual image path
  },
  // Add more mentors
];


  // Add more mentors


// Course data
const courses = [
  {
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 5,
    totalRatings: 1200,
    totalHours: "22",
    lectures: 155,
    level: "Beginner",
    price: "149.9",
    imageSrc: "./assets/rectangle-1080.svg"
  },
  {
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 5,
    totalRatings: 1200,
    totalHours: "22",
    lectures: 155,
    level: "Beginner",
    price: "149.9",
    imageSrc: "./assets/rectangle-1080.svg"
  },
  {
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 5,
    totalRatings: 1200,
    totalHours: "22",
    lectures: 155,
    level: "Beginner",
    price: "149.9",
    imageSrc: "./assets/rectangle-1080.svg"
  },
  {
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 5,
    totalRatings: 1200,
    totalHours: "22",
    lectures: 155,
    level: "Beginner",
    price: "149.9",
    imageSrc: "./assets/rectangle-1080.svg"
  },
  {
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 5,
    totalRatings: 1200,
    totalHours: "22",
    lectures: 155,
    level: "Beginner",
    price: "149.9",
    imageSrc: "./assets/rectangle-1080.svg"
  },
  {
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 5,
    totalRatings: 1200,
    totalHours: "22",
    lectures: 155,
    level: "Beginner",
    price: "149.9",
    imageSrc: "./assets/rectangle-1080.svg"
  },
  {
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 5,
    totalRatings: 1200,
    totalHours: "22",
    lectures: 155,
    level: "Beginner",
    price: "149.9",
    imageSrc: "./assets/rectangle-1080.svg"
  },
  {
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 5,
    totalRatings: 1200,
    totalHours: "22",
    lectures: 155,
    level: "Beginner",
    price: "149.9",
    imageSrc: "./assets/rectangle-1080.svg"
  },
  {
    title: "Beginner’s Guide to Design",
    author: "Ronald Richards",
    rating: 5,
    totalRatings: 1200,
    totalHours: "22",
    lectures: 155,
    level: "Beginner",
    price: "149.9",
    imageSrc: "./assets/rectangle-1080.svg"
  }
  // Add more courses here
];

// Main Component
function CategoryPage() {
  return (
    <>
      <div className="p-6 font-inter">
        <h1 className="font-bold text-4xl text-gray-900">Design Courses</h1>
        <h2 className="font-semibold text-2xl text-gray-900 mt-6 mb-6">All Development Courses</h2>

        <div className="flex justify-between mb-10">
          <button className="flex items-center px-6 py-2.5 bg-white border border-gray-200 rounded-lg text-sm cursor-pointer">
            <img src="./assets/icon-filter.svg" alt="Filter Icon" className="mr-2" />
            Filter
          </button>
          <div className="flex items-center">
            <span className="text-base mr-4">Sort By</span>
            <button className="flex items-center px-6 py-2.5 bg-white border border-gray-200 rounded-lg text-sm cursor-pointer">
              Relevance
              <img src="./assets/icon-down-chevron.svg" alt="Down Chevron" className="ml-2" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <DesignCourse
              key={index}
              title={course.title}
              author={course.author}
              rating={course.rating}
              totalRatings={course.totalRatings}
              totalHours={course.totalHours}
              lectures={course.lectures}
              level={course.level}
              price={course.price}
              imageSrc={course.imageSrc}
            />
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-10">
          <button className="bg-white border border-gray-200 rounded-lg p-3 cursor-pointer">
            <img src="./assets/icon-left-chevron.svg" alt="Left Chevron" />
          </button>
          <button className="bg-white border border-gray-200 rounded-lg p-3 font-semibold text-gray-900">1</button>
          <button className="bg-white border border-gray-200 rounded-lg p-3">2</button>
          <button className="bg-white border border-gray-200 rounded-lg p-3">3</button>
          <button className="bg-white border border-gray-200 rounded-lg p-3 cursor-pointer">
            <img src="./assets/icon-right-chevron.svg" alt="Right Chevron" />
          </button>
        </div>
      </div>

      {/* Popular Mentors Section */}
      <PopularMentors mentors={[]} />  {/* Existing PopularMentors */}
      <FeaturedCourses courses={[]} />  {/* Existing Featured Courses */}

      {/* New PopularMentor Component Rendering */}
      <div>
        {/* First set of mentors */}
        <PopularMentors mentors={mentorsSet1} />

        {/* Second set of mentors */}
        {/* <PopularMentor mentors={mentorsSet2} /> */}
      </div>
    </>
  );
}

export default CategoryPage;
