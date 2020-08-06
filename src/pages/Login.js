import React from "react";
import { Link } from "react-router-dom";
import { getDayOfMonth } from "../functions/convertDateFormate";
const hijri = require("hijri");
function Login() {
  return (
    <div>
      <h1 className="mb-5">Login</h1>
      <Link
        className="bg-blue-500 rounded shadow px-5 py-2 text-white hover:bg-blue-600 "
        to="/dashboard"
      >
        go to dashbaord
      </Link>
      <div className="w-screen h-4/12 flex justify-between items-center flex-col">
        <h1 className="text-6xl">
          {hijri.convert(new Date()).year} - {getDayOfMonth(new Date())}
        </h1>
        <img
          src={require("../logo2.png")}
          style={{ width: "128px", height: "128x" }}
        />
      </div>
    </div>
  );
}

export default Login;
