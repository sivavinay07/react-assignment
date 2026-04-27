import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar__brand">BlogSphere</span>
      <ul className="navbar__links">
        {/* TODO: Add NavLink to Home ("/") */}
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {/* TODO: Add NavLink to a Users directory page if you attempt the bonus */}
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
    </nav>
  );
}
