// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = ({ onViewChange }) => {
  // Sample data, replace with your actual data
  const data = [
    { day: 'Monday', value: 10 },
    { day: 'Tuesday', value: 30 },
    { day: 'Wednesday', value: 50 },
    { day: 'Thursday', value: 80 },
    { day: 'Friday', value: 40 },
  ];

  const getMaxValue = () => {
    return Math.max(...data.map((item) => item.value));
  };

  return (
    <div className="dashboard">
      <h1 className="h1">Employee Productivity Dashboard</h1>
      <div className="graph-container">
        {data.map((item, index) => (
          <div key={index} className="day-container">
            <p className="day-name">{item.day}</p>
            <div className="bar" style={{ width: `${(item.value / getMaxValue()) * 100}%` }}>
              <p>{item.value}%</p>
            </div>
          </div>
        ))}
      </div>
      <button className="userlist-btn" onClick={() => onViewChange('userList')}>
        Employee Userlist
      </button>
    </div>
  );
};

export default Dashboard;
