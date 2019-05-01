import React from "react";
import { Link } from "react-router-dom";
//functional component
const HomePage = () => (
  <div className="jumbotron">
    <h1>React & Redux</h1>
    <p>Aaj kuch toofani kartey hain!</p>
    <Link to="about-us" className="btn btn-primary">
      About us
    </Link>
  </div>
);
export default HomePage;
