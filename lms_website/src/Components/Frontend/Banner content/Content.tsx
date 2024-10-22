import React from 'react';

interface ContentProps {
  title: string;
  description: string;
}

const Content: React.FC<ContentProps> = ({ title, description }) => {
  return (
    <section className="m-5 max-w-xl">
      <h1 className="text-4xl font-bold leading-snug tracking-tight text-slate-900 mb-9">
        {title}
      </h1>
      <p className="text-base font-normal leading-6 text-slate-500">
        {description}
      </p>
    </section>
  );
};

export default Content;
