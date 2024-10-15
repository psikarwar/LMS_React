import React from 'react';

interface Message {
  userName: string;
  userImage: string;
  date: string;
  messageContent: string;
}

// MessageCard component
const MessageCard: React.FC<Message> = ({ userName, userImage, date, messageContent }) => (
  <div className="mt-4 p-4 sm:p-6 border border-gray-200 rounded-lg bg-white">
    <div className="flex items-center gap-3 sm:gap-4 mb-2">
      <img
        src={userImage}
        alt="User"
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
      />
      <div className="flex-1">
        <span className="font-semibold text-sm sm:text-base">{userName}</span>
        <span className="block sm:inline ml-0 sm:ml-4 font-normal text-xs sm:text-sm text-gray-600">{date}</span>
      </div>
    </div>
    <p className="text-sm sm:text-base text-gray-800">{messageContent}</p>
  </div>
);

export default MessageCard;

// import React from 'react';

// interface Message {
//   userName: string;
//   userImage: string;
//   date: string;
//   messageContent: string;
// }

// // MessageCard component
// const MessageCard: React.FC<Message> = ({ userName, userImage, date, messageContent }) => (
//   <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-white">
//     <div className="flex items-center gap-2 mb-2">
//       <img src={userImage} alt="User" />
//       <span className="font-semibold">{userName}</span>
//       <span className="ml-auto font-normal text-sm text-gray-600">{date}</span>
//     </div>
//     <p>{messageContent}</p>
//   </div>
// );

// export default MessageCard;
