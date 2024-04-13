import React from "react";

const DoctorLogin = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl font-semibold mt-8">
          Welcome Back
        </h1>
        <form className="mx-auto mt-12 flex flex-col w-72 rounded px-4 py-4">
          <input
            type="text"
            name="name"
            className="border-2 p-2 my-2"
            placeholder="Dr. Name"
          />
          <input
            type="text"
            name="DoctorID"
            className="border-2 p-2 my-2"
            placeholder="Doctor Regd No."
          />
          <input
            type="text"
            name="regdHospital"
            className="border-2 p-2 my-2"
            placeholder="Registered Hostpital"
          />
          <input
            type="password"
            name="password"
            className="border-2 p-2 my-2"
            placeholder="password"
          />
          <button
            type="submit"
            className=" mt-4  py-2 bg-black text-white hover:opacity-50 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorLogin;
