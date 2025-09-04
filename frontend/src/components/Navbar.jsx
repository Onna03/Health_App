import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/">Home</Link>

      {token && <Link to="/workouts">Workouts</Link>}
      {token && <Link to="/add">Add Workout</Link>}
      {token && <Link to="/stats">Stats</Link>} {/* Stats link */}

      {!token && <Link to="/login">Login</Link>}
      {!token && <Link to="/register">Register</Link>}

      {token && (
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
}

export default Navbar;
