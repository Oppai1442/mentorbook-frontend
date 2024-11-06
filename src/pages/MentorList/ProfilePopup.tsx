import React, { useEffect, useState } from 'react';
import styles from './ProfilePopup.module.css';
import { Pagination } from '../../components/Pagination';
import { Feedback, mentor, User } from '../../types/Model';
import { getMentorFeedback } from '../../services';
import { formatDistanceToNow } from 'date-fns';
import BookingPopup from './BookingPopup';

interface ProfilePopupProps {
  mentor: mentor;
  onClose: () => void;
}

const ProfilePopup: React.FC<ProfilePopupProps> = ({ mentor, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [loadingFeedback, setLoadingFeedback] = useState(true);
  const [showBookingPopup, setShowBookingPopup] = useState(false);

  const handleOpenBooking = () => {
    setShowBookingPopup(true);
  };

  const handleCloseBooking = () => {
    setShowBookingPopup(false);
  };

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        setLoadingFeedback(true);
        const feedbackData = await getMentorFeedback(mentor.userId);

        setFeedback(feedbackData);
      } catch (error) {
        console.error('Failed to fetch feedback:', error);
      } finally {
        setLoadingFeedback(false);
      }
    };

    fetchFeedback();
  }, [mentor.userId]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      <div
        className={`modal d-block ${isVisible ? styles['fade-in'] : styles['fade-out']} ${styles['modal-overlay']}`}
        onClick={handleOverlayClick}
        tabIndex={-1}
      >
        <div className={`modal-dialog modal-xl ${styles['modal-centered']}`} onClick={(e) => e.stopPropagation()}>
          <div className={`modal-content ${styles['mainContainer']}`}>
            <div className="modal-header">
              <h5 className="modal-title">Mentor Profile</h5>
              <button type="button" className="btn-close" onClick={handleClose}></button>
            </div>
            <div className={`modal-body ${styles['modal-body']}`}>
              <div className={`row ${styles['row']}`}>
                {/* Mentor Info Section */}
                <div className={`col-md-6 ${styles['col-md-6']}`}>
                  <div className="d-flex align-items-center mb-3">
                    <img src={mentor.avatarUrl} alt="Mentor Avatar" className="rounded-circle me-3" width="80" height="80" />
                    <div>
                      <h5>{mentor.fullName}</h5>
                      <p className="mb-1">Rating: {mentor.rating} / 5</p>
                      <p className="mb-1">Total Booked: {mentor.totalBooked}</p>
                      <p className="mb-1">Email: {mentor.email}</p>
                    </div>
                  </div>
                  <p><strong>Major:</strong> {mentor.role}</p>
                  <p><strong>Description:</strong> {mentor.description}</p>
                  <p><strong>Skills:</strong></p>
                  <ul>
                    {mentor.skills.map((skill, index) => (
                      <li key={skill.skillId || index}>
                        <strong>{skill.skillName}:</strong> {skill.skillDescription}
                      </li>
                    ))}

                  </ul>
                  <p><strong>Available Time:</strong></p>
                  <ul>
                    {mentor.availableTime.map((slot, index) => (
                      <li key={index}>
                        {slot.day.charAt(0).toUpperCase() + slot.day.slice(1)}:
                        {slot.timeSlots.length > 0 ? (
                          slot.timeSlots.map((timeSlot, idx) => (
                            <span key={idx} className="badge bg-light text-dark me-1">
                              {`${timeSlot.start} - ${timeSlot.end}`}
                            </span>
                          ))
                        ) : (
                          ' Not available'
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Feedback Section */}
                <div className={`col-md-6 ${styles['col-md-6']} ${styles['feedback-container']}`}>
                  <h6 className="text-primary mb-4">Feedback</h6>
                  {loadingFeedback ? (
                    <p>Loading feedback...</p>
                  ) : feedback.length > 0 ? (
                    <div className={`overflow-auto ${styles['feedback-container']}`}>
                      {feedback.map((feedbackItem, index) => (
                        <div key={index} className={styles['feedbackItem']}>
                          <img src={feedbackItem.userAvatarUrl} alt="Feedback Avatar" className={styles['avatar']} />
                          <div className={styles['feedbackDetails']}>
                            <div className={styles['feedbackHeader']}>
                              <span className={styles['fullname']}>{feedbackItem.fullName}</span>
                              <span className={styles['time']}>{formatDistanceToNow(new Date(feedbackItem.feedbackTime), { addSuffix: true })}</span>
                            </div>
                            <div className={styles['rating']}>
                              {Array.from({ length: 5 }, (_, i) => (
                                <i
                                  key={i}
                                  className={`fa ${i < feedbackItem.rating ? 'fa-star' : 'fa-star-o'} ${styles['star']}`}
                                  aria-hidden="true"
                                  style={{ color: "#FFD43B" }} />
                              ))}
                            </div>
                            <p className={styles['comment']}>{feedbackItem.comment}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No feedback available</p>
                  )}
                </div>



              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: '#b9e310',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  marginRight: '10px',
                }}
              >
                <i className="fa-light fa-message-text" style={{ marginRight: '5px' }}></i>
                Contact
              </button>
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  marginRight: '10px',
                }}
                onClick={handleOpenBooking}
              >
                <i className="fa-light fa-calendars" style={{ marginRight: '5px' }}></i>
                Book now
              </button>
              <button
                type="button"
                className="btn"
                onClick={handleClose}
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                }}
              >
                <i className="fa-light fa-right-from-bracket" style={{ marginRight: '5px' }}></i>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {showBookingPopup && (
        <BookingPopup mentor={mentor} onClose={handleCloseBooking} />
      )}
    </>
  );
};

export default ProfilePopup;
