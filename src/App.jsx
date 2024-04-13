import "./App.css";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import PatientLogin from "./Pages/PatientLogin.jsx";
import Navbar from "./components/Navbar.jsx";
import DoctorLogin from "./Pages/DoctorLogin.jsx";

function App() {
  return (
    <div className="font-poppins">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="login/patientLogin" element={<PatientLogin />} />
        <Route path="login/doctorLogin" element={<DoctorLogin />} />
      </Routes>
    </div>
  );
}

export default App;
