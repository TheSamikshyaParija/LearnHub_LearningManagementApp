import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{ width: "200px", padding: "20px", background: "#eee" }}>
      <h3>Menu</h3>
      <ul>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/instructor">Instructor</Link></li>
        <li><Link to="/student">Student</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
