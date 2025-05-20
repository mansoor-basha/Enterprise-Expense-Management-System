import React from 'react';

const summary = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Summary Dashboard</h2>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginBottom: '40px' }}>
        <div style={cardStyle}>
          <h3>Total Employees</h3>
          <p style={statStyle}>120</p>
        </div>
        <div style={cardStyle}>
          <h3>Total Expenses</h3>
          <p style={statStyle}>$15,430</p>
        </div>
        <div style={cardStyle}>
          <h3>Pending Reports</h3>
          <p style={statStyle}>5</p>
        </div>
      </div>

      <div style={{ boxShadow: '0 0 15px rgba(0,0,0,0.1)', padding: '20px', borderRadius: '8px' }}>
        <h3>Monthly Expense Chart</h3>
        <div style={{
          height: '250px',
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#888',
          fontSize: '1.2rem',
          borderRadius: '6px',
          marginTop: '15px',
        }}>
          [Chart Placeholder]
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  flex: '1',
  backgroundColor: '#232f3e',
  color: '#fff',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  boxShadow: '0 4px 10px rgba(35,47,62,0.4)',
};

const statStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginTop: '10px',
};

export default summary;
