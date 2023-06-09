import React from "react";
import { Navbar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Card } from "./card.jsx";

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
      <div className="container-fluid  m-0 p-0">
        <Card />
      </div>
    </div>
  );
};

export default Home;
