import React from 'react';
import styles from '../styles/Badge.module.css';

interface BadgeProps {
  label: string;
  value: string;
  color?: string;
}

const Badge: React.FC<BadgeProps> = ({ label, value, color }) => (
  <div className={styles.badge} style={{ borderColor: color || '#e2e8f0' }}>
    <p className={styles.label}>{label}</p>
    <div className={styles.value} style={{ backgroundColor: color || '#fff' }}>
      {value}
    </div>
  </div>
);

export default Badge;
