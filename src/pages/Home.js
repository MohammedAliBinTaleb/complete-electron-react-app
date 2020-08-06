import React, { useContext } from "react";
import { Store } from "../state-mobx/state";
import { Link } from "react-router-dom";
function Home() {
  const store = useContext(Store);
  return (
    <div>
      <h1>Home</h1>
      <h1 className="my-5">state example : {store.txt}</h1>
      <Link
        className="bg-blue-500 rounded shadow px-5 py-2 text-white hover:bg-blue-600 my-5"
        to="/"
      >
        go to Login{" "}
      </Link>
    </div>
  );
}

export default Home;
