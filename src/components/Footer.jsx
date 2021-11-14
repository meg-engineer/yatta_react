import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Footer = () => {
  return (
    <nav style={{ textAlign: "center", padding: "100px" }}>
      <Link to="/about">
        <Button type="text">Y A T T A !　とは</Button>
      </Link>
    </nav>
  );
};

export default Footer;
