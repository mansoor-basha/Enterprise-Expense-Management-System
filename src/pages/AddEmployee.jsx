import React, { useState } from 'react';
import axios from 'axios';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    role: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your backend API endpoint for adding an employee
      const response = await axios.post('http://localhost:5000/api/employees', employee);
      if (response.status === 201) {
        setMessage('Employee added successfully!');
        setEmployee({ name: '', email: '', role: '' }); // Reset form
      }
    } catch (error) {
      console.error('Error adding employee:', error);
      setMessage('Failed to add employee.');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '30px auto', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', margin: '8px 0' }}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', margin: '8px 0' }}
          />
        </label>

        <label>
          Role:
          <input
            type="text"
            name="role"
            value={employee.role}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', margin: '8px 0' }}
          />
        </label>

        <button type="submit" style={{ padding: '10px 15px', background: '#232f3e', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Add Employee
        </button>
      </form>

      {message && <p style={{ marginTop: '15px' }}>{message}</p>}
    </div>
  );
};

export default AddEmployee;
