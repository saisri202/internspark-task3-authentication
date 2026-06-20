import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    navigate("/login");
  };

  const checkProtectedRoute = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await API.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert(response.data.message);
    } catch (error) {
      alert("Access denied");
    }
  };

  return (
  <div className="home">
    <h1>Welcome back, {user?.name} 👋</h1>

    <p>
      <strong>Email:</strong> {user?.email}
    </p>

  <p>
  <strong>Account Type:</strong> {user?.role}
</p>

    <p>
      This is a protected dashboard. Only authenticated users can access
      this page.
    </p>

    <button onClick={checkProtectedRoute}>
      Check Protected API
    </button>
  </div>
);
}

export default Dashboard;