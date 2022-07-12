import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => (
  <nav className="nav">
    <ul>
      <img className="nav-logo" src={require("../assets/logo.png")} alt="" />
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/BudgetApp">BudgetApp</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
