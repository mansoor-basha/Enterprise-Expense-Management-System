import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Expenses from './pages/Reports';
import Reports from './pages/Reports';
import Navbar from './components/Navbar';
import AddEmployee from './pages/AddEmployee';
import AddExpense from './pages/AddExpense';
import Categories from './pages/categories';
import Summary from './pages/Summary';
import Leaderboard from './pages/Leaderboard';




const App = () => {
  const isLoggedIn = localStorage.getItem('user');

  return (
    <div>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/leaderboard" element={<Leaderboard />} />


      </Routes>
    </div>
  );
};

export default App;
