import React from 'react';
// import Profile from '../Profile/Profile';
import InstructorCard from '../InstructorCard/InstructorCard';
import Pagination from '../Pagination/Pagination';
import { iconmail } from '../../images';
import { search } from '../../images';
import { icondown } from '../../images';


interface Instructor {
  name: string;
  title: string;
  imageSrc: string;
  mailIconSrc: string;
}

const TeachersMenu: React.FC = () => {
  const instructors: Instructor[] = [
    {
      name: 'Ronald Richards',
      title: 'UI/UX Designer',
      imageSrc: './assets/rectangle-1136.svg',
      mailIconSrc: iconmail,
    },
    {
      name: 'Jane Doe',
      title: 'Frontend Developer',
      imageSrc: './assets/rectangle-1136.svg',
      mailIconSrc: iconmail,
    },
    {
      name: 'John Smith',
      title: 'Backend Developer',
      imageSrc: './assets/rectangle-1136.svg',
      mailIconSrc: iconmail,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex px-2 py-4">
      <section className="flex-grow ">
          <h3 className="font-semibold text-xl sm:text-2xl text-gray-900">Teachers(12)</h3>

          <div className="flex flex-col gap-4 sm:flex-row justify-between my-6">
            <div className="flex items-center  px-4 py-2 border border-gray-200 rounded-lg bg-white w-full sm:w-auto mb-4 sm:mb-0">
              {/* <span className="text-sm sm:text-base">Search User</span> */}
              <input type='text' placeholder='Search User'/>
              <img src={search} alt="Search" className="w-4 h-4 " />
            </div>

            <div className="flex gap-4 sm:gap-6">
              <div className="flex items-center gap-1 sm:gap-4">
                <span className="text sm:text-base">Sort By</span>
                <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg bg-white">
                  <span className="text-sm sm:text-base">Relevance</span>
                  <img src={icondown} alt="Chevron" className="ml-2 w-4 h-4" />
                </button>
              </div>

              <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg bg-white">
                <img src="./assets/icon-filter.svg" alt="Filter" className="mr-2 w-4 h-4" />
                <span className="text-sm sm:text-base">Filter</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols gap-6">
            {instructors.map((instructor, index) => (
              <InstructorCard
                key={index}
                name={instructor.name}
                title={instructor.title}
                imageSrc={instructor.imageSrc}
                mailIconSrc={instructor.mailIconSrc}
              />
            ))}
          </div>

          <Pagination />
        </section>
      </main>
    </div>
  );
};

export default TeachersMenu;