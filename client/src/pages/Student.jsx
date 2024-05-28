import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Student = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    const fetchAllStudent = async () => {
      try {
        const res = await axios.get("http://localhost:8800/student");
        setStudent(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllStudent();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/student/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="title">Student Management System</div>
      <div className="names">
        <div className="name">First Name</div>
        <div className="name">Last Name</div>
      </div>

      {student.map((student) => (
        <div className="student" key={student.student_id}>
          <div className="element">{student.first_name}</div>
          <div className="element">{student.last_name}</div>
          <div className="element">
            {" "}
            <button
              className="delete"
              onClick={() => {
                handleDelete(student.student_id);
              }}
            >
              Delete
            </button>
          </div>
          <div className="element">
            <button className="update">
              <Link to={`/update/${student.student_id}`}>Update</Link>
            </button>
          </div>
          <div className="element">
            <Link to={`/StudentDetails/${student.student_id}`}>Details</Link>
          </div>
        </div>
      ))}
      <div className="new">
        {" "}
        <button className="newstudent">
          <Link to="/Add">Add New Student</Link>
        </button>
      </div>
    </div>
  );
};

export default Student;
