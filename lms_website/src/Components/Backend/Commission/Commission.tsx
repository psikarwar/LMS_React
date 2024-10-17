import React from 'react';
import Banner from "../Banner/Banner";
import Table from "../Table/Table";
import im2 from '../../../../../assets/icon-graph.svg';
import im3 from '../../../../../assets/icon-graph-2.svg';
import im4 from '../../../../../assets/icon-graph-3.svg';

const Commission: React.FC = () => {
  return (
    <>
    <div>
      <section className="flex gap-4 mb-12 ml-2 "> {/* Replaced .banners with Tailwind classes */}
        <Banner iconPath={im2} amount="$1K" description="Life Time Courses Commission" />
        <Banner iconPath={im3} amount="$800.00" description="Life Time Received Commission" />
        <Banner iconPath={im4} amount="$200.00" description="Life Time Pending Commission" />
      </section>
      <section className="mb-12 ml-2 w-full">
      <Table />

      </section>
    </div>  
    </>
  );
}

export default Commission;
