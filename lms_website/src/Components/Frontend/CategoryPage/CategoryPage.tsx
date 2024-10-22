// import Header from '../../Header/Header';
import DesignCourse from './DesignCourse/DesignCourse';
import PopularMentors from './PopularMentor/PopularMentor';
// import Footer from '../../Footer/Footer';
import CategoryRating from './CategoryRating/CategoryRating'; // Import the CategoryRating component
import rightimg from '../../../../assets/chevron-right.svg';

// Mentor data arrays (same as provided)
const mentorsSet1 = [
  {
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    rating: '4.9',
    students: '2400 Students',
    image: './assets/rectangle-1136.svg',
  },
  {
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    rating: '4.9',
    students: '2400 Students',
    image: './assets/rectangle-1136.svg',
  },
  {
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    rating: '4.9',
    students: '2400 Students',
    image: './assets/rectangle-1136.svg',
  },
  {
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    rating: '4.9',
    students: '2400 Students',
    image: './assets/rectangle-1136.svg',
  },
  {
    name: 'Ronald Richards',
    role: 'UI/UX Designer',
    rating: '4.9',
    students: '2400 Students',
    image: './assets/rectangle-1136.svg',
  },
  // Repeat as necessary
];

// Course data (same as provided)
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
    imageSrc: "./assets/rectangle-1080.svg",
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
    imageSrc: "./assets/rectangle-1080.svg",
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
    imageSrc: "./assets/rectangle-1080.svg",
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
    imageSrc: "./assets/rectangle-1080.svg",
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
    imageSrc: "./assets/rectangle-1080.svg",
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
    imageSrc: "./assets/rectangle-1080.svg",
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
    imageSrc: "./assets/rectangle-1080.svg",
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
    imageSrc: "./assets/rectangle-1080.svg",
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
    imageSrc: "./assets/rectangle-1080.svg",
  },  
  // Repeat as necessary
];

// Main Component
function CategoryPage() {
  return (
    <>
      {/* Header component */}
      {/* <Header /> */}

      <div className="p-6 font-inter">
        <h1 className="font-bold text-4xl text-gray-900">Design Courses</h1>
        <h2 className="font-semibold text-2xl text-gray-900 mt-6 mb-6">All Development Courses</h2>

        <div className="flex justify-between mb-10 flex-wrap">
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

        {/* New Flex Layout with Sidebar */}
        <div className="flex flex-wrap">
          {/* Left Sidebar with Filters */}
          <div className="w-full md:w-1/4 pr-6 mb-6 md:mb-0">
            <CategoryRating title="Rating" content={<div>Ratings Content</div>} />
            <CategoryRating title="Number of Chapters" content={<div>Chapters Content</div>} />
            <CategoryRating title="Price" content={<div>Price Content</div>} />
            <CategoryRating title="Category" content={<div>Category Content</div>} />
          </div>

          {/* Main Course Grid */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-10">
              <button className="bg-white border border-gray-200 rounded-lg p-3 cursor-pointer">
                <img src="./assets/icon-left-chevron.svg" alt="Left Chevron" />
              </button>
              <button className="bg-white border border-gray-200 rounded-lg p-3 font-semibold text-gray-900">1</button>
              <button className="bg-white border border-gray-200 rounded-lg p-3">2</button>
              <button className="bg-white border border-gray-200 rounded-lg p-3">3</button>
              <button className="bg-white border border-gray-200 rounded-lg p-3 cursor-pointer">
                <img src={rightimg} alt="Right Chevron" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Mentors Section */}
      <h2 className="font-semibold text-2xl leading-[140%] text-gray-900 mb-2 text-left relative" style={{ marginTop: '15px', marginLeft: '15px' }}>
        Top Instructors
      </h2>
      {/* Render first set of mentors */}
      <PopularMentors mentors={mentorsSet1} />
      <h2 className="font-semibold text-2xl leading-[140%] text-gray-900 mb-2 text-left relative" style={{ marginTop: '15px', marginLeft: '15px' }}>
        Featured Course
      </h2>
      <div
        className="p-4 grid grid-cols-4 gap-11 w-fit h-fit"
        style={{ marginLeft: '1rem' }}

      >
        {courses.slice(0, 4).map((course, index) => (
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

      {/* Footer Component */}
      {/* <Footer /> */}
    </>
  );
}

export default CategoryPage;
