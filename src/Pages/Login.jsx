import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MobileLayout from "../Components/MobileLayout";
import "../Styles/login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigate("/profile");
  };

  return (
    <MobileLayout>
      <div className="login-container">
        <h1>
          Signin to your
          <br />
          PopX account
        </h1>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </p>

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </MobileLayout>
  );
}

export default Login;