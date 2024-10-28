import React, { useState } from "react";
import styles from "./ProfilePopup.module.css";

interface Feedback {
  avatar: string;
  date: string;
  time: string;
  message: string;
  fullName: string;
  rating: number;
}

interface User {
  avatar: string;
  name: string;
  address: string;
  email: string;
  skills: string[];
  experience: string;
  pricePerHour: number;
  totalBooked: number;
  rating: number;
  feedback: Feedback[];
}

interface ProfilePopupProps {
  onClose: () => void;
  onBook: () => void;
  onContact: () => void;
  user: User;
}

const ProfilePopup: React.FC<ProfilePopupProps> = ({ onClose, onBook, onContact, user }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'feedback'>('profile');

  return (
    <div className="modal show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className={`modal-content ${styles["popup-content"]}`}>
          <div className="modal-header">
            <h5 className="modal-title">{user.name}</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`} 
                        onClick={() => setActiveTab('profile')}>
                  Mentor Profile
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className={`nav-link ${activeTab === 'feedback' ? 'active' : ''}`} 
                        onClick={() => setActiveTab('feedback')}>
                  Feedback
                </button>
              </li>
            </ul>

            {activeTab === 'profile' && (
              <div>
                <div className="d-flex align-items-center mb-3">
                  <img src={user.avatar} alt="User Avatar" className={`rounded-circle me-3 ${styles["avatar"]}`} style={{ width: '80px', height: '80px' }} />
                  <div>
                    <p><strong>Address:</strong> {user.address}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Full Name:</strong> {user.name}</p>
                    <p><strong>Experience:</strong> {user.experience}</p>
                    <p><strong>Price per Hour:</strong> ${user.pricePerHour}</p>
                    <p><strong>Total Booked:</strong> {user.totalBooked}</p>
                    <p><strong>Rating:</strong> {user.rating}</p>
                    <p><strong>Skills:</strong> {user.skills.join(', ')}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'feedback' && (
              <div className={styles["feedback-container"]}>
                {user.feedback.map((feedback, index) => (
                  <div key={index} className={`d-flex mb-3 ${styles["feedback-item"]}`}>
                    <img src={feedback.avatar} alt="Feedback Avatar" className={`rounded-circle me-2 ${styles["feedback-avatar"]}`} style={{ width: '40px', height: '40px' }} />
                    <div className={styles["feedback-content"]}>
                      <div className={styles["feedback-header"]}>
                        <span className={`fw-bold`}>{feedback.fullName}</span>
                        <span className={`text-muted me-2`}>{feedback.time}</span>
                      </div>
                      <p>{feedback.message}</p>
                      <p><strong>Rating:</strong> {feedback.rating} <i className="bi bi-three-dots-vertical"></i></p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onContact}>
              Contact
            </button>
            <button className="btn btn-primary" onClick={onBook}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;