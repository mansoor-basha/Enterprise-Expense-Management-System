import React from 'react';
// import './Leaderboard.css'; // Optional: for custom styles

const Leaderboard = () => {
  // Sample static data — replace with dynamic data from backend if needed
  const leaders = [
    { name: 'Alice Johnson', points: 980 },
    { name: 'Bob Smith', points: 860 },
    { name: 'Charlie Davis', points: 770 },
    { name: 'Diana Moore', points: 700 },
    { name: 'Ethan Brown', points: 650 }
  ];

  return (
    <div className="leaderboard-container" style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderRadius: '10px', backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#232f3e' }}>🏆 Leaderboard</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0', textAlign: 'left' }}>
            <th style={{ padding: '10px' }}>Rank</th>
            <th style={{ padding: '10px' }}>Name</th>
            <th style={{ padding: '10px' }}>Points</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((leader, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px' }}>{index + 1}</td>
              <td style={{ padding: '10px' }}>{leader.name}</td>
              <td style={{ padding: '10px' }}>{leader.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
