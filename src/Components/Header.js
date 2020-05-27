import React from "react";
import { Link } from "react-router-dom";
const Header = () => (
  <div className="header" style={{
    backgroundColor:"black"
  }}>
    <Link to="/">
      <h2 className="pt-2">BigScreen</h2>
    </Link>
    <hr />
  </div>
);

export default Header;
