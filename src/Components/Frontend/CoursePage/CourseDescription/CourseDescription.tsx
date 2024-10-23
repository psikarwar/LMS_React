import React from 'react';

const CourseDescription: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 text-gray-800 font-inter">
      <section className="flex flex-col gap-1">
        <h2 className="font-semibold text-xl text-gray-900 leading-normal">Course Description</h2>
        <p className="font-normal text-base leading-6 max-w-3xl">
          This interactive e-learning course will introduce you to User Experience (UX) design, the art
          of creating products and services that are intuitive, enjoyable, and user-friendly. Gain a solid
          foundation in UX principles and learn to apply them in real-world scenarios through engaging
          modules and interactive exercises.
        </p>
      </section>

      <section className="flex flex-col gap-1">
        <h2 className="font-semibold text-xl text-gray-900 leading-normal">Certification</h2>
        <p className="font-normal text-base leading-6 max-w-3xl">
          At Byway, we understand the significance of formal recognition for your hard work and dedication
          to continuous learning. Upon successful completion of our courses, you will earn a prestigious
          certification that not only validates your expertise but also opens doors to new opportunities
          in your chosen field.
        </p>
      </section>
    </div>
  );
};

export default CourseDescription;
