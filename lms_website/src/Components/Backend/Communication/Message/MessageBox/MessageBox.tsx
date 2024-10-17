import React from "react";

type Message = {
  content: string;
  timestamp: string;
  type: "received" | "sent";  // Union type ensuring it's either "received" or "sent"
};

type User = {
  name: string;
  role: string;
  image: string;
};

type MessageboxProps = {
  user: User;
  messages: Message[];
};

const Messagebox: React.FC<MessageboxProps> = ({ user, messages }) => {
  return (
    <div className="w-full max-w-3xl mx-auto border border-gray-300 rounded-lg bg-white overflow-hidden">
      {/* Chat Header */}
      <div className="flex items-center p-4 border-b border-gray-300">
        <img src={user.image} alt="User" className="w-8 h-8 rounded-full" />
        <div className="ml-3 flex-grow">
          <span className="block text-lg font-semibold text-gray-900">{user.name}</span>
          <span className="block text-sm font-medium text-gray-500">{user.role}</span>
        </div>
        <div className="flex gap-2">
          <button className="text-red-500 font-medium">Delete</button>
          <button className="text-blue-500 font-medium">Block</button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.type === "received" ? "bg-gray-100" : "bg-gray-200 text-right"
            } p-3 rounded-lg`}
          >
            <p className="text-gray-800 opacity-80">{message.content}</p>
            <span className="block text-xs font-semibold text-gray-500 mt-2">{message.timestamp}</span>
          </div>
        ))}
      </div>

      {/* Chat Footer */}
      <div className="flex items-center p-4 border-t border-gray-300">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 bg-gray-100 rounded-lg border-none outline-none text-gray-900"
        />
        <button className="ml-3 px-4 py-2 bg-green-600 text-white rounded-lg font-medium">Send</button>
      </div>
    </div>
  );
};

export default Messagebox;
