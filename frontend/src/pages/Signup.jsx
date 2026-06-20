import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "Customer",
  });

  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
      password
    );
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!validatePassword(form.password)) {
      alert(
        "Password must be at least 8 characters and include uppercase, lowercase, number and special character"
      );
      return;
    }

    try {
      const response = await API.post("/auth/signup", form);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data));
      window.dispatchEvent(new Event("storage"));

      alert("Signup successful!");
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="form-box">
      <h1>Signup</h1>

      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <select
  name="role"
  value={form.role}
  onChange={handleChange}
  required
>
  <option value="Customer">Customer</option>
  <option value="Manager">Manager</option>
</select>

       <div className="password-box">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Enter password"
    value={form.password}
    onChange={handleChange}
    required
  />

  <button
    type="button"
    className="show-btn"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </button>
</div>

        <p className="password-note">
          Password must contain uppercase, lowercase, number and special
          character.
        </p>

        <button type="submit">Signup</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;