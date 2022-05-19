import { NavLink } from "react-router-dom"

import App from "../App";

export function Navbar() {
  return (

    <nav>
      <NavLink to="/model_create" >
        Create a new Model
      </NavLink>
      <NavLink to="/model_get" >
        Get model
      </NavLink>
      <NavLink to="/manager_create" >
        Create a new Manager
      </NavLink>
      <NavLink to="/modeltojob_add" >
        Create a new Manager
      </NavLink>
      <NavLink to="/modeltojob_delete" >
        Create a new Manager
      </NavLink>
    </nav>

  );
}
