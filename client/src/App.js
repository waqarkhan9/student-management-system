import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./pages/Student";
import Update from "./pages/Update";
import Add from "./pages/Add";
import StudentDetails from "./pages/StudentDetails";
import "./style.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/studentdetails" element={<StudentDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
