import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/AddEmployee.css"

const AddEmployee = ({ employees, setEmployees }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const editEmployee = location.state?.employee;
  const editIndex = location.state?.index;

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    if (editEmployee) {
      setName(editEmployee.name);
      setNumber(editEmployee.number);
      setEmail(editEmployee.email);
      setCity(editEmployee.city);
    }
  }, [editEmployee]);

  const handleAdd = (e) => {
    e.preventDefault();

    if ( name === "" ||  !/^\d{10}$/.test(number) ||  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || city === "" ) {
      alert("Please fill all fields correctly");
      return;
    }

    const employee = {
      name,
      number,
      email,
      city,
    };

    // Update existing employee
    if (editIndex !== undefined) {
      const updatedEmployees = [...employees];
      updatedEmployees[editIndex] = employee;
      setEmployees(updatedEmployees);
    }
    // Add new employee
    else {
      setEmployees([...employees, employee]);
    }

    setName("");
    setNumber("");
    setEmail("");
    setCity("");

    navigate("/view");
  };

  return (
    <div className="container">
      <h1>{editIndex !== undefined ? "Update Employee" : "Add Employee"}</h1>

      <form onSubmit={handleAdd}>
        <p>Enter Name</p>
        <input type="text" value={name}  onChange={(e) => setName(e.target.value)} />

        <p>Enter Phone Number</p>
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>

        <p>Enter Email</p>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <p>Enter City</p>
        <input type="text"  value={city}  onChange={(e) => setCity(e.target.value)} />

        <br />
        <br />

        <button type="submit"> {editIndex !== undefined? "Update Employee": "Add Employee"} </button>
      </form>
    </div>
  );
};

export default AddEmployee;