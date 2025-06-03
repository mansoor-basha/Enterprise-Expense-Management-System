import React from 'react';

const categories = [
  {
    id: 1,
    title: 'Finance',
    description: 'Manage budgets, expenses, and financial reports.',
    icon: '💰',
  },
  {
    id: 2,
    title: 'Human Resources',
    description: 'Employee management, attendance, and payroll.',
    icon: '👥',
  },
  {
    id: 3,
    title: 'Marketing',
    description: 'Campaigns, analytics, and social media management.',
    icon: '📈',
  },
  {
    id: 4,
    title: 'IT Support',
    description: 'Manage tickets, hardware, and software issues.',
    icon: '🖥️',
  },
];

const Categories = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Categories</h2>
      <p style={styles.description}>
        Explore different business categories and their key features.
      </p>

      <div style={styles.grid}>
        {categories.map(({ id, title, description, icon }) => (
          <div key={id} style={styles.card}>
            <div style={styles.icon}>{icon}</div>
            <h3 style={styles.cardTitle}>{title}</h3>
            <p style={styles.cardDescription}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '40px auto',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '10px',
    fontWeight: '700',
  },
  description: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '16px',
    color: '#555',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '25px',
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    padding: '25px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'transform 0.2s ease',
    cursor: 'pointer',
  },
  icon: {
    fontSize: '40px',
    marginBottom: '15px',
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: '20px',
    marginBottom: '8px',
  },
  cardDescription: {
    fontSize: '14px',
    color: '#666',
  },
};

export default Categories;
