import React from 'react';

interface BadgeProps {
  label: string;
  value: string;
  color?: string;
}

const Badge: React.FC<BadgeProps> = ({ label, value, color }) => (
  <div
    className="p-4 border rounded-lg text-center w-full sm:w-44 md:w-48 lg:w-56"
    style={{ borderColor: color || '#e2e8f0' }}
  >
    <p className="text-gray-700 font-normal text-sm">{label}</p>
    <div
      className="mt-1.5 py-1 px-2.5 rounded-md font-semibold text-xs"
      style={{ backgroundColor: color || '#fff', color: color ? '#fff' : '#fef2f2' }}
    >
      {value}
    </div>
  </div>
);

export default Badge;

// import React from 'react';
// import './Badge.css';

// interface BadgeProps {
//   label: string;
//   value: string;
//   color?: string;
// }

// const Badge: React.FC<BadgeProps> = ({ label, value, color }) => (
//   <div className="badge" style={{ borderColor: color || '#e2e8f0' }}>
//     <p className="label">{label}</p>
//     <div className="value" style={{ backgroundColor: color || '#fff' }}>
//       {value}
//     </div>
//   </div>
// );

// export default Badge;
