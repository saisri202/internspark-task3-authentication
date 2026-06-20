import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const updateNavbar = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", updateNavbar);

    return () => {
      window.removeEventListener("storage", updateNavbar);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken(null);

    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>Product Manager</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        {token ? (
  JSON.parse(localStorage.getItem("user"))?.role === "Manager" ? (
    <Link to="/add">Add Product</Link>
  ) : (
    <button
      className="nav-link-btn"
      onClick={() => alert("Only managers can add products.")}
    >
      Add Product
    </button>
  )
) : (
  <button
    className="nav-link-btn"
    onClick={() => {
      alert("🔒 Please login or signup to add products.");
      navigate("/login");
    }}
  >
    Add Product
  </button>
)}

        {token ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button className="nav-logout" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;