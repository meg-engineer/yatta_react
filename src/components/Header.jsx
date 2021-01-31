import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={{ textAlign: "center" }}>
      <h1>Y A T T A !</h1>
      <p>嬉しかったこと、シェアしよう</p>
      <p>▼</p>
      <Link to="/">Home</Link>
      <Link to="/post">post</Link>
    </nav>
  );
};

export default Header;
