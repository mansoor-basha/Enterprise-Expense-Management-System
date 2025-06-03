import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/expenses">My Expenses</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/add-expense">Add Expense</Link>
      <Link to="/categories">categories</Link>
      <Link to="/summary">summary</Link>
      <Link to="/leaderboard">Leaderboard</Link>


    </nav>
  );
};

export default Navbar;