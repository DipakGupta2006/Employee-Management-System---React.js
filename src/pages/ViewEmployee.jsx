import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ViewEmployee.css";
const ViewEmployee = ({ employees, setEmployees }) => {
  const navigate = useNavigate();

  const deleteEmployee = (index) => {
    const updatedEmployees = employees.filter(
      (_, i) => i !== index
    );

    setEmployees(updatedEmployees);
  };

  const updateEmployee = (index) => {
    navigate("/add", {
      state: {
        employee: employees[index],
        index: index,
      },
    });
  };

  return (
    <div className="view-container">
      <h1>Employee List</h1>

      {employees.length === 0 ? (
        <p className="empty-message">No Employees Added</p>
      ) : (
        <div className="employee-grid">
          {employees.map((emp, index) => (
            <div key={index} className="employee-card">
              <h3>{emp.name}</h3>

              <p>Email: {emp.email}</p>
              <p>Phone: {emp.number}</p>
              <p>City: {emp.city}</p>

              <div className="button-group">
                <button className="update-btn" onClick={() => updateEmployee(index)}>
                  Update
                </button>
                <button className="delete-btn" onClick={() => deleteEmployee(index)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewEmployee;