import React from 'react';
import MessageCard from '../MessagesCard/MessagesCard';
import { search } from '../../images';
import { ellipse140 } from '../../images';
import { ellipse139 } from '../../images'; 
import { icondown } from '../../images';
const MessagesMenu: React.FC = () => {
  const messages = [
    {
      userName: 'Ronald Richards',
      userImage: ellipse140,
      date: '18th March, 2024',
      messageContent: 'Thank you for asking your doubt, I’ll send you a pdf file which covers the problems you are facing...',
    },
    {
      userName: 'Devon Lane',
      userImage: ellipse139,
      date: '18th March, 2024',
      messageContent: 'I’ll get back to you as soon as possible.',
    },
  ];

  return (
    <div className="bg-white font-sans">
      <main className="flex-1 flex px-2 py-4  ">
        <section className="flex-grow">
          <h3 className="font-semibold text-xl sm:text-2xl text-gray-900">Messages</h3>

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

          {messages.map((message, index) => (
            <MessageCard
              key={index}
              userName={message.userName}
              userImage={message.userImage}
              date={message.date}
              messageContent={message.messageContent}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default MessagesMenu;

// import React from 'react';
// import MessageCard from '../MessagesCard/MessagesCard';
// import search from '../../assets/myassets/search.svg'

// const MessagesMenu: React.FC = () => {
//   const messages = [
//     {
//       userName: 'Ronald Richards',
//       userImage: './assets/ellipse-140.svg',
//       date: '18th March, 2024',
//       messageContent: 'Thank you for asking your doubt, I’ll send you a pdf file which covers the problems you are facing...',
//     },
//     {
//       userName: 'Devon Lane',
//       userImage: './assets/ellipse-140-2.svg',
//       date: '18th March, 2024',
//       messageContent: 'I’ll Get back to you as soon as possible.',
//     },
//   ];

//   return (
//     <div className="bg-white font-sans">

//       <main className="flex px-20 py-10">


//         <section className="flex-grow px-10">
//           <h3 className="font-semibold text-2xl text-gray-900">Messages</h3>
          
//           <div className="flex justify-between my-6">
//             <div className="flex items-center px-4 py-2 border border-gray-200 rounded-lg bg-white">
//               <span>Search User</span>
//               <img src={search} alt="Search" className="ml-2" />
//             </div>
            
//             <div className="flex gap-6">
//               <div className="flex items-center gap-4">
//                 <span>Sort By</span>
//                 <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg bg-white">
//                   <span>Relevance</span>
//                   <img src="./assets/icon-down-chevron.svg" alt="Chevron" className="ml-2" />
//                 </button>
//               </div>
              
//               <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg bg-white">
//                 <img src="./assets/icon-filter.svg" alt="Filter" className="mr-2" />
//                 <span>Filter</span>
//               </button>
//             </div>
//           </div>

//           {messages.map((message, index) => (
//             <MessageCard
//               key={index}
//               userName={message.userName}
//               userImage={message.userImage}
//               date={message.date}
//               messageContent={message.messageContent}
//             />
//           ))}
//         </section>
//       </main>
//     </div>
//   );
// };

// export default MessagesMenu;
