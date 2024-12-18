import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./pages/Student";
import Update from "./pages/Update";
import StudentDetails from "./pages/StudentDetails";
import Add from "./pages/Add";

import "./style.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/studentdetails/:id" element={<StudentDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
