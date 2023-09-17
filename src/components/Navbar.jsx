import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/user-details">User Details</Link>
      -------------------------------------------
      <Link to="/todos-list">Todos List</Link>
    </div>
  );
};

export default Navbar;
