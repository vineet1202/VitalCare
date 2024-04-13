import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="text-center mt-24">
      <h1 className="text-3xl text-center">Login</h1>
      <Link to="/login/patientLogin">
        <button className="m-4 mt-4 w-60 px-4 py-2 bg-black text-white hover:opacity-50 rounded">
          Patient Login
        </button>
      </Link>

      <Link to="/login/doctorLogin">
        <button className="m-4 mt-4 w-60 px-4 py-2 bg-black text-white hover:opacity-50 rounded">
          Specialised Doctor Login
        </button>
      </Link>
    </div>
  );
};

export default Login;
