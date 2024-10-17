import React from "react";

type User = {
  name: string;
  role: string;
  image: string;
  badge?: string;
};

const users: User[] = [
  { name: "Veli Dincer", role: "Student", image: "ellipse-1.svg" },
  { name: "Theresa Webb", role: "Student", image: "ellipse-1-2.svg", badge: "3" },
  { name: "Eleanor Pena", role: "Student", image: "ellipse-1-3.svg" },
  { name: "Jane Cooper", role: "Student", image: "ellipse-1-4.svg" },
  { name: "Brooklyn Simmons", role: "Student", image: "ellipse-1-5.svg" },
  { name: "Dianne Russell", role: "Student", image: "ellipse-1-6.svg" },
  { name: "Floyd Miles", role: "Student", image: "ellipse-1-7.svg" }
];

const SearchUser: React.FC = () => {
  return (
    <div className="w-full max-w-xs mx-auto">
      {/* Search Bar */}
      <div className="flex items-center p-2.5 bg-white rounded-lg border border-gray-300">
        <input
          type="text"
          placeholder="Search User"
          className="flex-1 text-sm text-gray-700 border-none outline-none"
        />
        <img src="./assets/search.svg" alt="Search" className="w-6 h-6" />
      </div>
      
      {/* User List */}
      <div className="mt-3">
        {users.map((user) => (
          <div
            key={user.name}
            className={`flex items-center p-4 rounded-lg border border-gray-300 mb-2.5 ${user.badge ? 'bg-sky-100' : 'bg-white'}`}
          >
            <img src={`./assets/${user.image}`} alt={user.name} className="w-8 h-8 rounded-full mr-3" />
            <div className="flex-grow">
              <div className="text-base font-semibold text-gray-900">{user.name}</div>
              <div className="text-sm text-gray-500">{user.role}</div>
            </div>
            {user.badge && (
              <div className="bg-blue-500 text-white text-xs font-semibold rounded-full px-2 py-0.5">
                {user.badge}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchUser;
