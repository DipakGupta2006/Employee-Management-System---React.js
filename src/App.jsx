import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddEmployee from "./pages/AddEmployee";
import ViewEmployee from "./pages/ViewEmployee";
import Dashboard from "./pages/Dashboard"
import Navbar from "./components/Navbar"

function App() {
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem("employees");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard/>} />

        <Route path="/add" element={<AddEmployee employees={employees} setEmployees={setEmployees} />} />

        <Route path="/view" element={<ViewEmployee employees={employees} setEmployees={setEmployees} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;