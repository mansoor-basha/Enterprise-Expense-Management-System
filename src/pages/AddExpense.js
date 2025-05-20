import React, { useState } from 'react';
import axios from 'axios';

const AddExpense = () => {
  const [expense, setExpense] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your backend API endpoint for adding an expense
      const response = await axios.post('http://localhost:5000/api/expenses', expense);
      if (response.status === 201) {
        setMessage('Expense added successfully!');
        setExpense({ title: '', amount: '', date: '' }); // Reset form
      }
    } catch (error) {
      console.error('Error adding expense:', error);
      setMessage('Failed to add expense.');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '30px auto', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={expense.title}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', margin: '8px 0' }}
          />
        </label>

        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', margin: '8px 0' }}
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={expense.date}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', margin: '8px 0' }}
          />
        </label>

        <button
          type="submit"
          style={{ padding: '10px 15px', background: '#232f3e', color: '#fff', border: 'none', cursor: 'pointer' }}
        >
          Add Expense
        </button>
      </form>

      {message && <p style={{ marginTop: '15px' }}>{message}</p>}
    </div>
  );
};

export default AddExpense;
