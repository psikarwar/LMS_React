import React from 'react';

const section1 = [
    {
        title: 'Become an Instructor',
        description:
            'Instructors from around the world teach millions of students on Byway. We provide the tools and skills to teach what you love.',
        buttonText: 'Start Your Instructor Journey',
        buttonIcon: './assets/icon-arrow-narrow-right.svg',
        image: '../../../assets/image-8.svg',
    },
];
const section2 = [
    {
        title: 'Transform your life through education',
        description:
            'Learners around the world are launching new careers, advancing in their fields, and enriching their lives.',
        buttonText: 'Checkout Courses',
        buttonIcon: './assets/icon-arrow-narrow-right.svg',
        image: '../../../assets/image-4-2.svg',
    },
];

const EducationSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-14 py-20 px-20 bg-white">
      {section1.map((section, index) => (
        <div
          key={index}
          className="flex flex-wrap items-center gap-36"
        >
          <img
            src={section.image}
            alt="Illustration"
            className="flex-shrink-0 rounded-xl w-2/5"
          />
          <div className="flex flex-col gap-4 w-1/2">
            <h3 className="text-black font-inter font-semibold text-lg leading-[150%]">
              {section.title}
            </h3>
            <p className="text-[#1d2939] font-inter font-normal text-base leading-[160%]">
              {section.description}
            </p>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-inter font-medium leading-[160%]">
              {section.buttonText}
              <img
                src={section.buttonIcon}
                alt="arrow"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      ))}
          
          {section2.map((section, index) => (
        <div
          key={index}
          className="flex flex-wrap items-center gap-36"
        >
         
                  <div className="flex flex-col gap-4 ">  
            <h3 className="text-black font-inter font-semibold text-lg leading-[150%]">
              {section.title}
            </h3>
            <p className="text-[#1d2939] font-inter font-normal text-base leading-[160%]">
              {section.description}
            </p>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-inter font-medium leading-[160%]">
              {section.buttonText}
              <img
                src={section.buttonIcon}
                alt="arrow"
                className="w-6 h-6"
                          />
            
                      </button>
                       <div className="flex flex-col gap-4 w-1/2">  
                      <img
            src={section.image}
            alt="Illustration"
            className="flex-shrink-0 rounded-xl w-2/5"
                          />
                          </div>
          </div>
        </div>
      ))}
          
          
      </div>
      
   
  );
};

export default EducationSection;
