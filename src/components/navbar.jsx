import React from "react";

//stateless functional component
const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Navbar
          <span className="m-2 badge badge-pill badge-primary">
            {props.totalCounters}
          </span>
        </span>
      </nav>
    </div>
  );
};

export default NavBar;
