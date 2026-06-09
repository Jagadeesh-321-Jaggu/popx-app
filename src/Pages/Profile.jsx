import MobileLayout from "../Components/MobileLayout";
import "../Styles/profile.css";
import { FaCamera } from "react-icons/fa";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <MobileLayout>
      <div className="profile-page">

        <div className="profile-header">
          <h3>Account Settings</h3>
        </div>

        <div className="profile-card">

          <div className="profile-info">
            <div className="avatar-wrapper">
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="profile"
                className="avatar"
              />

              <div className="camera-icon">
                <FaCamera />
              </div>
            </div>

            <div className="user-details">
              <h4>
                {user?.fullName || "Marry Doe"}
              </h4>

              <p>
                {user?.email || "Marry@Gmail.Com"}
              </p>
            </div>
          </div>

          <p className="description">
            Lorem Ipsum Dolor Sit Amet,
            Consetetur Sadipscing Elitr,
            Sed Diam Nonumy Eirmod Tempor
            Invidunt Ut Labore Et Dolore
            Magna Aliquyam Erat, Sed Diam
          </p>

        </div>

        <div className="dashed-line"></div>

      </div>
    </MobileLayout>
  );
}

export default Profile;