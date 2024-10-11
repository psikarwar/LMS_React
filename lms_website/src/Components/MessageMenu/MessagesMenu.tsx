import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import MessageCard from '../MessagesCard/MessagesCard';

const MessagesMenu: React.FC = () => {
  const messages = [
    {
      userName: 'Ronald Richards',
      userImage: './assets/ellipse-140.svg',
      date: '18th March, 2024',
      messageContent: 'Thank you for asking your doubt, I’ll send you a pdf file which covers the problems you are facing...',
    },
    {
      userName: 'Devon Lane',
      userImage: './assets/ellipse-140-2.svg',
      date: '18th March, 2024',
      messageContent: 'I’ll Get back to you as soon as possible.',
    },
  ];

  return (
    <div className="bg-white font-sans">
      <Header />

      <main className="flex px-20 py-10">
        <Profile />

        <section className="flex-grow px-10">
          <h3 className="font-semibold text-2xl text-gray-900">Messages</h3>
          
          <div className="flex justify-between my-6">
            <div className="flex items-center px-4 py-2 border border-gray-200 rounded-lg bg-white">
              <span>Search User</span>
              <img src="./assets/search.svg" alt="Search" className="ml-2" />
            </div>
            
            <div className="flex gap-6">
              <div className="flex items-center gap-4">
                <span>Sort By</span>
                <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg bg-white">
                  <span>Relevance</span>
                  <img src="./assets/icon-down-chevron.svg" alt="Chevron" className="ml-2" />
                </button>
              </div>
              
              <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg bg-white">
                <img src="./assets/icon-filter.svg" alt="Filter" className="mr-2" />
                <span>Filter</span>
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

      <Footer />
    </div>
  );
};

export default MessagesMenu;

// import React from 'react';
// import './MessagesMenu.css';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import Profile from '../Profile/Profile';
// import MessageCard from '../MessagesCard/MessagesCard';

// const MessagesMenu: React.FC = () => {
//     const messages= [
//         {
//           userName: 'Ronald Richards',
//           userImage: './assets/ellipse-140.svg',
//           date: '18th March, 2024',
//           messageContent: 'Thank you for asking your doubt, I’ll send you a pdf file which covers the problems you are facing...',
//         },
//         {
//           userName: 'Devon Lane',
//           userImage: './assets/ellipse-140-2.svg',
//           date: '18th March, 2024',
//           messageContent: 'I’ll Get back to you as soon as possible.',
//         },
//         // Add more messages here
//       ];
//   return (
//     <div className="profile-page">

//       <Header/>
      
//       <main className="main-content">
//         <Profile/>  
//         <section className="messages-section">
//           <h3>Messages</h3>
//           <div className="message-controls">
//             <div className="search">
//               <span>Search User</span>
//               <img src="./assets/search.svg" alt="Search" />
//             </div>
//             <div className="sort-filter">
//               <div className="sort-by">
//                 <span>Sort By</span>
//                 <button className="sort-button">
//                   <span>Relevance</span>
//                   <img src="./assets/icon-down-chevron.svg" alt="Chevron" />
//                 </button>
//               </div>
//               <button className="filter-button">
//                 <img src="./assets/icon-filter.svg" alt="Filter" />
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
      
    
//       <Footer/>
//     </div>
//   );
// };

// export default MessagesMenu;

// import React from 'react';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import Profile from '../Profile/Profile';

// const MessagesMenu: React.FC = () => {
//   return (
//     <div className="bg-white font-sans">
//       <Header />
      
//       <main className="flex px-20 py-10">
//         {/* Profile Sidebar */}
//         <Profile />
        
//         <section className="flex-grow px-10">
//           <h3 className="font-semibold text-xl text-gray-900">Messages</h3>
          
//           <div className="flex justify-between mt-6 mb-6">
//             <div className="flex items-center px-4 py-2 border border-gray-200 rounded-lg bg-white">
//               <span className="text-gray-500">Search User</span>
//               <img src="./assets/search.svg" alt="Search" className="ml-2" />
//             </div>
            
//             <div className="flex gap-6">
//               <div className="flex items-center gap-4">
//                 <span className="text-gray-500">Sort By</span>
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

//           {/* Messages */}
//           <div className="mt-4 p-4 border border-gray-200 rounded-xl bg-white">
//             <div className="flex items-center gap-2 mb-2">
//               <img src="./assets/ellipse-140.svg" alt="User" className="w-10 h-10" />
//               <span className="font-semibold">Ronald Richards</span>
//               <span className="ml-auto text-sm text-gray-500">18th March, 2024</span>
//             </div>
//             <p>Thank you for asking your doubt, I’ll send you a pdf file which covers the problems you are facing...</p>
//           </div>
          
//           <div className="mt-4 p-4 border border-gray-200 rounded-xl bg-white">
//             <div className="flex items-center gap-2 mb-2">
//               <img src="./assets/ellipse-140-2.svg" alt="User" className="w-10 h-10" />
//               <span className="font-semibold">Devon Lane</span>
//               <span className="ml-auto text-sm text-gray-500">18th March, 2024</span>
//             </div>
//             <p>I’ll get back to you as soon as possible.</p>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default MessagesMenu;
