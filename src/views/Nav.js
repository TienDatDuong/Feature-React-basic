import React from "react";
import {Link,NavLink} from "react-router-dom"
function Nav() {
  return (
    <div className="overflow-hidden bg-cyan-400 flex items-start ">
      <NavLink activeClassName="active" className="text-white text-center p-4 no-underline text-base hover:text-black hover:bg-white " to="/" exact>
        Home
      </NavLink>
      <NavLink activeClassName="active" className="text-white text-center p-4 no-underline text-base hover:text-black hover:bg-white" to="/timer" exact>Timer Apps</NavLink>
      <NavLink activeClassName="active" className="text-white text-center p-4 no-underline text-base hover:text-black hover:bg-white" to="/todo" exact>Todo Apps</NavLink>
      {/* <NavLink activeClassName="active" className="text-white text-center p-4 no-underline text-base hover:text-black hover:bg-white" to="/seccet" exact>Secret</NavLink> */}
    </div>
  );
}

export default Nav;
