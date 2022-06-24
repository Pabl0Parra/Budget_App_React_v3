import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => (
  <nav className="nav">
    <ul>
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
