// import React from 'react';
// import Banner from "../Banner/Banner";
// import Table from "../Table/Table";
// import { graph1, graph2, graph3 } from '../../images';

// const Commission: React.FC = () => {
//   return (
//     <>
//     <div>
//       <section className="flex gap-4 mb-12 ml-2 "> {/* Replaced .banners with Tailwind classes */}
//         <Banner iconPath={graph1} amount="$1K" description="Life Time Courses Commission" />
//         <Banner iconPath={graph2} amount="$800.00" description="Life Time Received Commission" />
//         <Banner iconPath={graph3} amount="$200.00" description="Life Time Pending Commission" />
//       </section>
//       <section className="mb-12 ml-2 w-full">
//       <Table />

//       </section>
//     </div>
//     </>
//   );
// }

// export default Commission;



import React from 'react';
import Banner from "../Banner/Banner";
import Table from "../Table/Table";
import { graph1, graph2, graph3 } from '../../images';

const Commission: React.FC = () => {
  return (
    <div className="p-4">
      {/* Banner Section */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12"> 
        <Banner iconPath={graph1} amount="$1K" description="Life Time Courses Commission" />
        <Banner iconPath={graph2} amount="$800.00" description="Life Time Received Commission" />
        <Banner iconPath={graph3} amount="$200.00" description="Life Time Pending Commission" />
      </section>

      {/* Table Section */}
      <section className="w-full overflow-x-auto">
        <Table />
      </section>
    </div>
  );
}

export default Commission;
