import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "../Components/MobileLayout";
import "../Styles/signup.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/profile");
  };

  return (
    <MobileLayout>
      <div className="signup-container">
        <h1>
          Create your
          <br />
          PopX account
        </h1>

        <div className="input-group">
          <label>Full Name<span>*</span></label>
          <input
            type="text"
            name="fullName"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Phone number<span>*</span></label>
          <input
            type="text"
            name="phone"
            placeholder="Marry Doe"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Email address<span>*</span></label>
          <input
            type="email"
            name="email"
            placeholder="Marry Doe"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Password<span>*</span></label>
          <input
            type="password"
            name="password"
            placeholder="Marry Doe"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Company name</label>
          <input
            type="text"
            name="company"
            placeholder="Marry Doe"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="agency-section">
          <p>
            Are you an Agency?<span>*</span>
          </p>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={formData.agency === "yes"}
                onChange={handleChange}
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="agency"
                value="no"
                checked={formData.agency === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        <button
          className="signup-btn"
          onClick={handleSubmit}
        >
          Create Account
        </button>
      </div>
    </MobileLayout>
  );
}

export default Signup;