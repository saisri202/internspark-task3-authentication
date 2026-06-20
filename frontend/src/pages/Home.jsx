import { Link } from "react-router-dom";

function Home() {
  const token = localStorage.getItem("token");

  return (
    <div className="hero-section">
      <div className="hero-card">
        <h1>Product Management System</h1>
        <h2>InternSpark Task 3 - JWT Authentication</h2>

        <p>
          A full-stack MERN application with product CRUD operations,
          user authentication, JWT protected routes, and secure password hashing.
        </p>

        <div className="hero-actions">
          {token ? (
            <>
              <Link to="/products">
                <button>Manage Products</button>
              </Link>

              <Link to="/dashboard">
                <button className="secondary-btn">Go to Dashboard</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button>Login</button>
              </Link>

              <Link to="/signup">
                <button className="secondary-btn">Create Account</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;