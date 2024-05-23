import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [student, setStudent] = useState({
    first_name: "",
    last_name: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/student", student);
      alert("Student added");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(student);

  return (
    <div className="form">
      <h1>Add New Student</h1>
      <input
        type="text"
        placeholder="firstname"
        onChange={handleChange}
        name="first_name"
      />
      <input
        type="text"
        placeholder="lastname"
        onChange={handleChange}
        name="last_name"
      />
      <button className="formButton" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};
export default Add;
