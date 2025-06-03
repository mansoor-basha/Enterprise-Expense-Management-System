import React, { useEffect, useState } from 'react';
import axios from 'axios';

const bannerImages = [
  'https://media.istockphoto.com/id/1501791585/vector/group-of-diverse-young-men-wave-their-hands-in-welcoming-gesture-happy-persons-hold-greeting.jpg?s=612x612&w=0&k=20&c=AHiu86YNoZsjmDd7wRTHoJnBFl1yxX7lAbnm58r5eHk=',
  'https://www.shutterstock.com/image-vector/big-target-manager-employees-engaged-260nw-1291275943.jpg',
  'https://www.shutterstock.com/image-photo/portrait-business-woman-laptop-smile-260nw-2357435023.jpg',
];

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentBanner, setCurrentBanner] = useState(0);

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.id) {
        try {
          const response = await axios.get(`http://localhost:5000/api/user/${user.id}`);
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner(prev => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <header style={{ background: '#232f3e', color: '#fff', padding: '10px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0 }}>ExpenseTracker</h2>
          <div style={{ flex: 1, margin: '0 20px' }}>
            <input
              type="text"
              placeholder="Search expenses, reports, etc."
              style={{ width: '100%', padding: '6px', borderRadius: '4px', border: 'none' }}
            />
          </div>

          {/* Admin Add Employee Button */}
          <button
            onClick={() => window.location.href = '/add-employee'}
            style={{
              background: '#4CAF50',
              border: 'none',
              padding: '8px 12px',
              cursor: 'pointer',
              marginRight: '10px',
              color: '#fff',
              borderRadius: '4px',
              fontWeight: 'bold',
            }}
          >
            Add Employee
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            style={{ background: '#febd69', border: 'none', padding: '8px 12px', cursor: 'pointer' }}
          >
            Logout
          </button>
        </div>

        {/* Auto-scrolling Banner BELOW search bar */}
        <div
  style={{
    position: 'relative',
    width: '100%',
    height: '600px',   // increase container height
    marginTop: '15px',
    overflow: 'hidden',
    borderRadius: '8px',
  }}
>
          {bannerImages.map((src, index) => (
    <img
      key={index}
      src={src}
      alt={`Banner ${index + 1}`}
      style={{
        width: '100%',
        height: '600px',  // increase image height here too
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        transition: 'opacity 1s ease-in-out',
        opacity: currentBanner === index ? 1 : 0,
        zIndex: currentBanner === index ? 1 : 0,
      }}
    />
  ))}
        </div>
      </header>

      {/* Welcome */}
      <div style={{ padding: '20px' }}>
        <h1>Welcome, {user?.name || 'Guest'}!</h1>

        {loading ? (
          <p>Loading your data...</p>
        ) : (
          <>
            {userData ? (
              <div>
                <h2>Your Dashboard</h2>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Last Login:</strong> {userData.lastLogin}</p>

                <h3>Recent Activities</h3>
                {userData.activities && userData.activities.length > 0 ? (
                  <ul>
                    {userData.activities.map((activity, index) => (
                      <li key={index}>{activity}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No recent activities found.</p>
                )}
              </div>
            ) : (
              <p>No additional user data found.</p>
            )}
          </>
        )}
      </div>

      {/* Navigation Buttons */}
      <div style={{ display: 'flex',flexWrap: 'wrap', justifyContent: 'space-around', padding: '20px' }}>
        {[
          { label: 'Add Expense', path: '/add-expense' },
          { label: 'Expense Reports', path: '/reports' },
          { label: 'Categories', path: '/categories' },
          { label: 'Monthly Summary', path: '/summary' },
          { label: 'Leaderboard', path: '/leaderboard' },
        ].map((item, index) => (
          <a
            key={index}
            href={item.path}
            style={{
              display: 'block',
              width: '200px',
              padding: '20px',
              margin: '10px',
              background: '#f3f3f3',
              textAlign: 'center',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#0d4c6e',
              boxShadow: '0 2px 5px rgba(82, 17, 17, 0.1)',
            }}
          >
            {item.label}
          </a>
        ))}
      </div>

            {/* Recommended Section Like Amazon */}
      <div style={{ padding: '30px 20px' }}>
        <h2 style={{ marginBottom: '20px' }}>Top Suggestions for You</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {[
            {
              title: 'Automate Monthly Reports',
              desc: 'Let the system generate and email reports automatically.',
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvwHHQpWtUsAmz1S4PcbdpPxhP6_92ow7zkw&s',
            },
            {
              title: 'AI-Based Budget Tips',
              desc: 'Use AI to get tips to save more and spend smart.',
              image: 'https://img.icons8.com/color/96/artificial-intelligence.png',
            },
            {
              title: 'Invite Team Members',
              desc: 'Collaborate with your team to manage department expenses.',
              image: 'https://img.icons8.com/color/96/conference-call.png',
            },
            {
              title: 'Integrate with Excel',
              desc: 'Download and upload Excel sheets seamlessly.',
              image: 'https://img.icons8.com/color/96/microsoft-excel-2019--v1.png',
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                width: '230px',
                margin: '10px',
                padding: '15px',
                background: '#fff',
                borderRadius: '10px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                textAlign: 'center',
              }}
            >
              <img src={item.image} alt={item.title} style={{ width: '80px', height: '80px' }} />
              <h4 style={{ margin: '10px 0' }}>{item.title}</h4>
              <p style={{ fontSize: '14px', color: '#555' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Footer */}
      <footer style={{ background: '#232f3e', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} Enterprise Expense Tracker | All rights reserved</p>
      </footer>
    </div>
  );
};

export default Home;
