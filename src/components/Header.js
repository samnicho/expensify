import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <div>
      <NavLink exact activeClassName="is-active" to="/">Home</NavLink>
      <NavLink activeClassName="is-active" to="/create">Add</NavLink>
      <NavLink activeClassName="is-active" to="/help">Help</NavLink>
    </div>
  </header>
);

export default Header;