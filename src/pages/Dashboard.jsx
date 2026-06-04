import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Dashboard.css"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Employee Management System</h1>

      <p>
        Manage employees, add new records, view employee details,
        update information, and remove employees.
      </p>

      <div className="dashboard-buttons">
        <Link to="/add">
          <button>Add Employee</button>
        </Link>

        <Link to="/view">
          <button>View Employees</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;