// src/Components/Frontend/ShoppingCart/ShoppingCartMenu/ShoppingCartMenu.tsx
import React from 'react';
import { iconrightimg } from '../../../images';

interface BreadcrumbItem {
  label: string;
  isActive?: boolean;
}  

interface ShoppingCartMenuProps {
  title: string;
  items: BreadcrumbItem[];
}

const ShoppingCartMenu: React.FC<ShoppingCartMenuProps> = ({ items }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 p-4 bg-white border-b border-gray-200">
      <div className="flex items-center flex-wrap">
        {items.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <span className={`text-sm ${item.isActive ? 'text-blue-600' : 'text-gray-900'}`}>
              {item.label}
            </span>
            {index < items.length - 1 && (
              <img
                src={iconrightimg}
                alt=">"
                className="w-5 h-5"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCartMenu;
