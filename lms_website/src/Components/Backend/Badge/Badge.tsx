import React from 'react';
import './Badge.css';

interface BadgeProps {
  label: string;
  value: string;
  color?: string;
}

const Badge: React.FC<BadgeProps> = ({ label, value, color }) => (
  <div className="badge" style={{ borderColor: color || '#e2e8f0' }}>
    <p className="label">{label}</p>
    <div className="value" style={{ backgroundColor: color || '#fff' }}>
      {value}
    </div>
  </div>
);

export default Badge;
