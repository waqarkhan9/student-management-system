import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [student, setStudent] = useState({
    first_name: "",
    last_name: "",
  });

  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const studentId = location.pathname.split("/")[2];
  const handleChange = (e) => {
    setStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/student/${studentId}`, student);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
      console.log(studentId);
    }
  };
  console.log(student);

  return (
    <div className="form">
      <h1>Update Student</h1>
      <input
        type="text"
        placeholder="firstname"
        onChange={handleChange}
        name="first_name"
      />
      <input
        type="text"
        placeholder="firstname"
        onChange={handleChange}
        name="last_name"
      />
      <button className="formButton" onClick={handleClick}>
        Update
      </button>
      <div className="linkallstudents">
        {" "}
        {error && "Something went wrong!"}
        <button className="btnallstudents">
          <Link to="/">See all Students</Link>
        </button>
      </div>
    </div>
  );
};

export default Update;
