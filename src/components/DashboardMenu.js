import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { label: 'Add Expense', path: '/add-expense' },
  { label: 'Reports', path: '/reports' },
  { label: 'Categories', path: '/categories' },
  { label: 'Monthly Summary', path: '/summary' },
  { label: 'Leaderboard', path: '/leaderboard' },
];

const DashboardMenu = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      justifyContent: 'center', 
      padding: '20px', 
      gap: '20px' 
    }}>
      {menuItems.map((item, index) => (
        <Link
          to={item.path}
          key={index}
          style={{
            width: '200px',
            height: '120px',
            background: '#f1f1f1',
            borderRadius: '10px',
            textAlign: 'center',
            textDecoration: 'none',
            color: '#333',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '16px',
            transition: 'transform 0.2s',
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default DashboardMenu;
