import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import { Link, useLocation } from "react-router-dom";

const StudentDetails = () => {
  const [student, setStudent] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchStudentDetails = async (id) => {
      try {
        const id = location.pathname.split("/")[2];
        const res = await axios.get(`http://localhost:8800/byid/${id}`);
        setStudent(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStudentDetails();
  }, []);

  return (
    <div className="container">
      <div className="title">Student Details</div>
      <div className="names">
        <div className="name">First Name</div>
        <div className="name">Last Name</div>
      </div>

      {student.map((student) => (
        <div className="student" key={student.student_id}>
          <div className="element">{student.first_name}</div>
          <div className="element">{student.last_name}</div>
          <div className="element"> </div>
          <div className="element">
            <button className="update">
              <Link to={`/update/${student.student_id}`}>Update</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentDetails;