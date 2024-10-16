// import React from 'react';
// import  './Tab.css';

// interface TabProps {
//   title: string;
//   active?: boolean;
// }

// const Tab: React.FC<TabProps> = ({ title, active }) => (
//   <div className={`tab ${active ?active : ''}`}>
//     <span>{title}</span>
//   </div>
// );

// export default Tab;
import React from 'react';
import './Tab.css';

interface TabProps {
  title: string;
  active?: boolean;
  onClick?: () => void; // Optional click handler if needed for interaction
}

const Tab: React.FC<TabProps> = ({ title, active, onClick }) => (
  <div className={`tab ${active ? 'active' : ''}`} onClick={onClick}>
    <span>{title}</span>
  </div>
);

export default Tab;
