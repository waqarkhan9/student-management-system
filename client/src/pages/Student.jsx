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

      <div className="students">
        {student.map((student) => (
          <div className="student" key={student.student_id}>
            {student.first_name}
            {student.last_name}

            <button
              className="delete"
              onClick={() => {
                handleDelete(student.student_id);
              }}
            >
              Delete
            </button>
            <button className="update">
              <Link to={`/update/${student.student_id}`}>Update</Link>
            </button>
          </div>
        ))}
      </div>

      <button>
        <Link to="/Add">Add a new Student</Link>
      </button>
    </div>
  );
};

export default Student;
