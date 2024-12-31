import React, { useState } from "react";

function FormHandling() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [submittedData, setSubmittedData] = useState([]); // Store all submissions

  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPass(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Add new submission to the top of the list
    setSubmittedData([{ name, email, pass }, ...submittedData]);
    // Clear the form fields
    setName("");
    setEmail("");
    setPass("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name: <input type="text" onChange={handleName} value={name} />
        <br />
        Email: <input type="email" onChange={handleEmail} value={email} />
        <br />
        Password: <input type="password" onChange={handlePassword} value={pass} />
        <br />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h1>Submitted Data</h1>
        {submittedData.map((data, index) => (
          <div key={index} style={{ border: "1px solid #ccc", margin: "10px 0", padding: "10px" }}>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Password:</strong> {data.pass}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FormHandling;
