import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div style={{ maxWidth: '700px', margin: '40px auto', padding: '30px', boxShadow: '0 2px 12px rgba(0,0,0,0.1)', borderRadius: '10px', backgroundColor: '#ffffff' }}>
      <h2 style={{ color: '#232f3e', marginBottom: '20px' }}>👤 Your Account</h2>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
        <img
          src="https://www.w3schools.com/w3images/avatar2.png"
          alt="User Avatar"
          style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '20px', border: '2px solid #ddd' }}
        />
        <div>
          <p style={{ fontSize: '18px', margin: '5px 0' }}><strong>Name:</strong> {user?.name}</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}><strong>Email:</strong> {user?.email || 'user@example.com'}</p>
          <p style={{ fontSize: '18px', margin: '5px 0' }}><strong>Role:</strong> {user?.role || 'Member'}</p>
        </div>
      </div>

      <button
        onClick={logout}
        style={{
          padding: '10px 20px',
          backgroundColor: '#ff9900',
          border: 'none',
          borderRadius: '5px',
          color: '#fff',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
