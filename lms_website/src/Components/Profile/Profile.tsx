import React from 'react';
import './Profile.css'; // Assuming you will use a CSS file for styling

const Profile: React.FC = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="./assets/ellipse-53.svg" alt="Profile" className="profile-image" />
        <h2 className="profile-name">John Doe</h2>
        <button className="share-button">
          <span>Share Profile</span>
          <img src="./assets/icon-share.svg" alt="Share" className="share-icon" />
        </button>
      </div>
      <img src="./assets/line-27.svg" alt="Line" className="divider" />
      <div className="profile-menu">
        <div className="menu-item">Profile</div>
        <div className="menu-item">My Courses</div>
        <div className="menu-item">Teachers</div>
        <div className="menu-item">Message</div>
        <div className="menu-item selected">My Reviews</div>
      </div>
    </div>
  );
};

export default Profile;
