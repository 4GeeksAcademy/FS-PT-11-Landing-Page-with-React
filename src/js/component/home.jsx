import React from "react";
import { Navbar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";

//create your first component
const Home = () => {
  return (
    <div>
      <div className="container-fluid m-0 p-0">
        <Navbar />
      </div>
      <div className="container-fluid  m-0 p-0">
        <Jumbotron />
      </div>
    </div>
  );
};

export default Home;
