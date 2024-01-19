import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';

export default function NavItem({ to, children, id }) {
  return (
    <li>
      <NavLink
        to={`${to}/${id}`}
        className="block px-5 py-1.5 text-black hover:bg-gray-100"
      >
        {children}
      </NavLink>
    </li>
  );
}

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}