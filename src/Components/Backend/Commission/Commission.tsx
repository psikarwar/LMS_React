import React from 'react';
import Banner from "../Banner/Banner";
import Table from "../Table/Table";
import { graph1, graph2, graph3 } from '../../images';

const Commission: React.FC = () => {
  return (
    <>
    <div>
      <section className="flex gap-4 mb-12 ml-2 "> {/* Replaced .banners with Tailwind classes */}
        <Banner iconPath={graph1} amount="$1K" description="Life Time Courses Commission" />
        <Banner iconPath={graph2} amount="$800.00" description="Life Time Received Commission" />
        <Banner iconPath={graph3} amount="$200.00" description="Life Time Pending Commission" />
      </section>
      <section className="mb-12 ml-2 w-full">
      <Table />

      </section>
    </div>  
    </>
  );
}

export default Commission;