import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={{ textAlign: "center" }}>
      <Link to="/">
        <h1 style={{ paddingTop: "50px" }}>Y A T T A !</h1>
      </Link>

      <p>嬉しかったこと、シェアしよう</p>
      <p>▼</p>
    </nav>
  );
};

export default Header;
