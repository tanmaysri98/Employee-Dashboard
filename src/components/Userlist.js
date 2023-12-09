// src/components/UserList.js
import React, { useState } from 'react';
import './Userlist.css'; 

const UserList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Sample employee data
  const employeeData = [
    { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'Engineering' },
    { id: 2, name: 'Jane Smith', position: 'Data Analyst', department: 'Analytics' },
    { id: 3, name: 'Mike Johnson', position: 'Project Manager', department: 'Management' },
    { id: 4, name: 'Anna Davis', position: 'UX Designer', department: 'Design' },
    { id: 5, name: 'Chris Brown', position: 'Marketing Specialist', department: 'Marketing' },
    { id: 6, name: 'Emily White', position: 'HR Manager', department: 'Human Resources' },
    { id: 7, name: 'Samuel Turner', position: 'Financial Analyst', department: 'Finance' },
    { id: 8, name: 'Olivia Taylor', position: 'Quality Assurance Engineer', department: 'Engineering' },
    { id: 9, name: 'Daniel Harris', position: 'Operations Manager', department: 'Operations' },
    { id: 10, name: 'Grace Martinez', position: 'Sales Representative', department: 'Sales' },
    { id: 11, name: 'Ethan Robinson', position: 'Customer Support Specialist', department: 'Customer Service' },
    { id: 12, name: 'Lily Murphy', position: 'Product Manager', department: 'Product Management' },
    { id: 13, name: 'Aiden Walker', position: 'IT Administrator', department: 'IT' },
    { id: 14, name: 'Sophia Green', position: 'Event Coordinator', department: 'Events' },
    { id: 15, name: 'Carter Reed', position: 'Legal Counsel', department: 'Legal' },
  ];

  const filteredEmployees = employeeData.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    
      <h2 className="h2">Employee Productivity Dashboard</h2>
      <input
        type="text"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="card-container">
        {filteredEmployees.map((employee) => (
          <div key={employee.id} className="card">
            <h3>{employee.name}</h3>
            <p>Position: {employee.position}</p>
            <p style={{color: '#36A546'}}>Department: {employee.department}</p>
            <p style={{color: '#B77420             '}}>Employee ID: {employee.id}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserList;
