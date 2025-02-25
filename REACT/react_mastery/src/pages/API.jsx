import React, { useState, useEffect } from "react";
import axios from "axios";
import "./API.css";

const API_URL = "http://localhost:5065/api/emp";

const EmployeeApp = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newEmployee, setNewEmployee] = useState({ name: "", age: "", position: "" });
  const [editingEmployee, setEditingEmployee] = useState(null);

  // Fetch employees
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(API_URL);
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  // Add new employee
  const addEmployee = async () => {
    if (!newEmployee.name || !newEmployee.age || !newEmployee.position) {
      alert("Please fill all fields!");
      return;
    }
    try {
      const response = await axios.post(API_URL, newEmployee);
      setEmployees([...employees, response.data]);
      setNewEmployee({ name: "", age: "", position: "" });
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  // Delete employee
  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setEmployees(employees.filter(emp => emp.id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  // Edit employee (Set Data in Form)
  const startEditing = (employee) => {
    setEditingEmployee(employee);
    setNewEmployee({ name: employee.name, age: employee.age, position: employee.position });
  };

  // Update Employee
  const updateEmployee = async () => {
    if (!editingEmployee) return;

    try {
      await axios.put(`${API_URL}/${editingEmployee.id}`, newEmployee);
      setEmployees(employees.map(emp => (emp.id === editingEmployee.id ? { ...newEmployee, id: emp.id } : emp)));
      setNewEmployee({ name: "", age: "", position: "" });
      setEditingEmployee(null);
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  // Search filter
  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) || emp.id.toString() === searchTerm
  );

  return (
    <div className="container">
      <h1>Employee Management</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by ID or Name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Employee List */}
      <ul className="employee-list">
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((emp) => (
            <li key={emp.id}>
              <span>{emp.name} ({emp.position}) - Age: {emp.age}</span>
              <div className="buttons">
                <button className="edit-btn" onClick={() => startEditing(emp)}>Edit</button>
                <button className="delete-btn" onClick={() => deleteEmployee(emp.id)}>Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p>No employees found.</p>
        )}
      </ul>

      {/* Add / Edit Employee Form */}
      <div className="form-container">
        <h3>{editingEmployee ? "Edit Employee" : "Add Employee"}</h3>
        <input
          type="text"
          placeholder="Name"
          value={newEmployee.name}
          onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          value={newEmployee.age}
          onChange={(e) => setNewEmployee({ ...newEmployee, age: e.target.value })}
        />
        <input
          type="text"
          placeholder="Position"
          value={newEmployee.position}
          onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
        />
        <button className="add-btn" onClick={editingEmployee ? updateEmployee : addEmployee}>
          {editingEmployee ? "Update Employee" : "Add Employee"}
        </button>
        {editingEmployee && <button className="cancel-btn" onClick={() => setEditingEmployee(null)}>Cancel</button>}
      </div>
    </div>
  );
};

export default EmployeeApp;
