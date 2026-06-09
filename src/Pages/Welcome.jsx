import { useNavigate } from "react-router-dom";
import MobileLayout from "../Components/MobileLayout";
import "../Styles/welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="welcome-content">
        <h1>Welcome to PopX</h1>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </p>

        <button
          className="create-btn"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>

        <button
          className="already-btn"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </MobileLayout>
  );
}

export default Welcome;