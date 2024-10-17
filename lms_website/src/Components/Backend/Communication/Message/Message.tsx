import React from "react";
import SearchUser from "./SearchUser/SearchUser"; // Adjust the path if necessary
import Messagebox from "./MessageBox/MessageBox"; // Import the Messagebox component

const Message: React.FC = () => {
  const user = {
    name: "Jack Harrow",
    role: "Student",
    image: "./assets/ellipse-1.svg",
  };

  // Fixing the 'type' property to match "received" | "sent"
  const messages: { content: string; timestamp: string; type: "received" | "sent" }[] = [
    { content: "Hi, I have some queries regarding the 2nd chapter.", timestamp: "40 mins ago", type: "received" },
    { content: "Sure, let me know what the issue is.", timestamp: "38 mins ago", type: "sent" },
  ];

  return (
    <div className="flex flex-row gap-4">
      {/* Left side: User List (SearchUser) */}
      <div className="w-1/3">
        <h1 className="text-xl font-bold mb-4">User List</h1>
        {/* Call the SearchUser component here */}
        <SearchUser />
      </div>

      {/* Right side: Messagebox */}
      <div className="w-2/3">
        <Messagebox user={user} messages={messages} />
      </div>
    </div>
  );
};

export default Message;
