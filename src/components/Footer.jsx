import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav style={{ textAlign: "center" }}>
      <Link to="/about">
        <h1>Y A T T A !　とは</h1>
      </Link>
    </nav>
  );
};

export default Footer;
