import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink to="/" end>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <NavLink to="/contact">Contact</NavLink>
    </ul>
  );
};

export default Nav;
