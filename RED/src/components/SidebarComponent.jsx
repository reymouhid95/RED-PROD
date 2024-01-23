/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function SidebarComponent({ title, icon, path }) {
  return (
    <Link
      style={{ textDecoration: "none" }}
      className="ps-3 my-2 items "
      to={path}
      tabIndex="0"
    >
      <span>{icon}</span>
      <span className="mx-2">{title}</span>
    </Link>
  );
}

export default SidebarComponent;
