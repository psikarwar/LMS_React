// import React from 'react';
// import './MessageChatMenu.css'; // Import custom CSS for styling
// import Header from '../Header/Header';
// import Profile from '../Profile/Profile';
// import Footer from '../Footer/Footer';

// const MessageChatMenu: React.FC = () => {
//   return (
//     <div className="app">
//       <Header/>
      
//       <main className="main-content">
//         <Profile/>
        
//         <section className="messages-section">
//           <header className="section-header">
//             <h2>Messages</h2>
//           </header>

//           <div className="chat-container">
//             <div className="chat-header">
//               <img src="./assets/icon-arrow-narrow-left.svg" alt="Back" className="back-icon" />
//               <img src="./assets/ellipse-140.svg" alt="Profile" className="chat-profile" />
//               <span>Ronald Richards</span>
//               <img src="./assets/icon-horizontal-dots.svg" alt="Options" className="options-icon" />
//             </div>

//             <div className="chat-content">
//               <div className="chat-date">
//                 <span>Today</span>
//               </div>
//               <div className="message received">
//                 <div className="message-time">10:25 am</div>
//                 <div className="message-bubble">Hello</div>
//                 <div className="message-bubble">Just wanted to tell you that i started your course and its going great!!</div>
//               </div>
//               <div className="message sent">
//                 <div className="message-time">10:25 am</div>
//                 <div className="message-bubble">Yes Sure</div>
//               </div>
//               <div className="message received">
//                 <img src="./assets/ellipse-141.svg" alt="Profile" className="message-profile" />
//                 <div className="message-time">12:23 pm</div>
//                 <div className="message-bubble">Hello! Thank you for reaching out to me. Feel free to ask any questions regarding the course, I will try to reply ASAP</div>
//               </div>
//             </div>

//             <div className="chat-input">
//               <input type="text" placeholder="Type Your Message" />
//               <button className="button send-button">Send</button>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer/>
//     </div>
//   );
// };

// export default MessageChatMenu;
import React from 'react';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';

const MessageChatMenu: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Header />

      <main className="flex-grow flex flex-col lg:flex-row p-5 lg:p-20 bg-gray-50">
        <Profile />

        <section className="flex-grow lg:ml-5 bg-white p-5 rounded-lg shadow-md">
          <header className="mb-5 border-b pb-3">
            <h2 className="text-xl font-semibold text-gray-800">Messages</h2>
          </header>

          <div className="chat-container">
            <div className="flex items-center justify-between mb-5">
              <img
                src="./assets/icon-arrow-narrow-left.svg"
                alt="Back"
                className="w-6 h-6"
              />
              <div className="flex items-center">
                <img
                  src="./assets/ellipse-140.svg"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="ml-3 text-lg font-medium text-gray-800">Ronald Richards</span>
              </div>
              <img
                src="./assets/icon-horizontal-dots.svg"
                alt="Options"
                className="w-6 h-6"
              />
            </div>

            <div className="chat-content space-y-4 mb-5">
              <div className="text-center text-sm text-gray-500">Today</div>

              <div className="message received">
                <div className="text-xs text-gray-500">10:25 am</div>
                <div className="bg-gray-100 p-3 rounded-lg text-gray-800">Hello</div>
                <div className="bg-gray-100 p-3 rounded-lg text-gray-800">
                  Just wanted to tell you that I started your course and it's going great!!
                </div>
              </div>

              <div className="message sent text-right">
                <div className="text-xs text-gray-500">10:25 am</div>
                <div className="bg-blue-600 text-white p-3 rounded-lg">Yes, Sure</div>
              </div>

              <div className="message received flex">
                <img
                  src="./assets/ellipse-141.svg"
                  alt="Profile"
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <div className="text-xs text-gray-500">12:23 pm</div>
                  <div className="bg-gray-100 p-3 rounded-lg text-gray-800">
                    Hello! Thank you for reaching out to me. Feel free to ask any questions regarding the course, I will try to reply ASAP.
                  </div>
                </div>
              </div>
            </div>

            <div className="chat-input flex items-center border border-gray-300 rounded-lg p-3">
              <input
                type="text"
                placeholder="Type Your Message"
                className="flex-grow border-none focus:outline-none p-2"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Send
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MessageChatMenu;