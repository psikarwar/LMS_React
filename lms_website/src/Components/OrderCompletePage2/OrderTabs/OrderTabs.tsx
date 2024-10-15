import React from 'react';

interface TabProps {
  tabs: string[]; // Array of tab names
  activeTab: string; // Name of the currently active tab
  onTabChange: (tab: string) => void; // Function to handle tab changes
}

const OrderTabs: React.FC<TabProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex gap-6">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`flex items-center justify-center w-28 rounded-lg p-4 cursor-pointer 
            ${activeTab === tab ? 'bg-blue-100' : 'bg-white border border-gray-300'}`}
          onClick={() => onTabChange(tab)} // Handle tab click
        >
          <span className={`text-sm font-normal ${activeTab === tab ? 'text-gray-900' : 'text-gray-700'}`}>
            {tab}
          </span>
        </div>
      ))}
    </div>
  );
};

// Example usage of the component
const tabs = ['Details', 'Instructor', 'Courses', 'Reviews'];

const ExampleUsage: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<string>(tabs[0]); // Set initial active tab

  return (
    <OrderTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
  );
};

export default OrderTabs;
