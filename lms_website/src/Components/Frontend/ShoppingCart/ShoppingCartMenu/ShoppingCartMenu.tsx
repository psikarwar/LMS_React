// src/Components/Frontend/ShoppingCart/ShoppingCartMenu/ShoppingCartMenu.tsx
import React from 'react';

interface BreadcrumbItem {
  label: string;
  isActive?: boolean;
}

interface ShoppingCartMenuProps {
  title: string;
  items: BreadcrumbItem[];
}

const ShoppingCartMenu: React.FC<ShoppingCartMenuProps> = ({ title, items }) => {
  return (
    <div className="flex items-center gap-8">
      <h1 className="font-semibold text-3xl text-gray-900">{title}</h1>
      <div className="flex items-center">
        {items.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <span className={`text-sm ${item.isActive ? 'text-blue-600' : 'text-gray-900'}`}>
              {item.label}
            </span>
            {index < items.length - 1 && (
              <img
                src={`./assets/icon-chevron-right-small${index === items.length - 2 ? '-2' : ''}.svg`}
                alt=">"
                className="w-6 h-6"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCartMenu;
