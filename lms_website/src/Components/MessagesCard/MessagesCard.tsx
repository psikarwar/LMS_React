import React from 'react';

interface Message {
  userName: string;
  userImage: string;
  date: string;
  messageContent: string;
}

// MessageCard component
const MessageCard: React.FC<Message> = ({ userName, userImage, date, messageContent }) => (
  <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-white">
    <div className="flex items-center gap-2 mb-2">
      <img src={userImage} alt="User" />
      <span className="font-semibold">{userName}</span>
      <span className="ml-auto font-normal text-sm text-gray-600">{date}</span>
    </div>
    <p>{messageContent}</p>
  </div>
);

export default MessageCard;
