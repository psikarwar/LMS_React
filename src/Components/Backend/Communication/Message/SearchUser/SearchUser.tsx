import React from "react";
import { elipse5img, elipseimg2, elipseimg3, elipseimg4, elipseimg6, elipseimg7, searchimg } from "../../../../images";
import { msgimg1 } from "../../../../images";

type User = {
  name: string;
  role: string;
  image: string;
  badge?: string;
};

const users: User[] = [
  { name: "Veli Dincer", role: "Student", image: msgimg1 },
  { name: "Theresa Webb", role: "Student", image: elipseimg2, badge: "3" },
  { name: "Eleanor Pena", role: "Student", image: elipseimg3 },
  { name: "Jane Cooper", role: "Student", image: elipseimg4 },
  { name: "Brooklyn Simmons", role: "Student", image: elipse5img },
  { name: "Dianne Russell", role: "Student", image: elipseimg6 },
  { name: "Floyd Miles", role: "Student", image: elipseimg7 }
];

const SearchUser: React.FC = () => {
  return (
    <div className="w-full max-w-xs mx-auto p-4 md:max-w-md lg:max-w-lg"> {/* Adjust container width for responsiveness */}
      {/* Search Bar */}
      <div className="flex items-center p-2.5 bg-white rounded-lg border border-gray-300">
        <input
          type="text"
          placeholder="Search User"
          className="flex-1 text-sm text-gray-700 border-none outline-none"
        />
        <img src={searchimg} alt="Search" className="w-6 h-6" />
      </div>
      
      {/* User List */}
      <div className="mt-3 space-y-2"> {/* Added responsive spacing */}
        {users.map((user) => (
          <div
            key={user.name}
            className={`flex items-center p-4 rounded-lg border border-gray-300 ${user.badge ? 'bg-sky-100' : 'bg-white'}`}
          >
            <img src={`${user.image}`} alt={user.name} className="w-8 h-8 rounded-full mr-3" />
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
