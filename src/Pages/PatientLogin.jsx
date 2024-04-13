import React from "react";

const PatientLogin = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold mt-8">Welcome Back</h1>
      <form className="mx-auto mt-12 flex flex-col w-72 rounded px-4 py-4">
        <input
          type="text"
          name="name"
          className="border-2 p-2 my-2"
          placeholder="Name"
        />
        <input
          type="text"
          name="patientID"
          className="border-2 p-2 my-2"
          placeholder="patientID"
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
  );
};

export default PatientLogin;
