import React from 'react';
import Sidebar from './Sidebar';
import styles from './MentorList.module.css';

const mentors = [
    {
        name: 'John Doe',
        industry: 'Software Engineering',
        rating: 4.8,
        reviews: 120,
    },
    {
        name: 'Jane Smith',
        industry: 'Data Science',
        rating: 4.6,
        reviews: 95,
    },
];

const MentorList: React.FC = () => {
    return (
        <div className={styles.mentorListContainer}>
            <Sidebar />
            <div className={styles.mentorList}>
                {mentors.map((mentor, index) => (
                    <div key={index} className={styles.mentorCard}>
                        <h3>{mentor.name}</h3>
                        <p><strong>Industry:</strong> {mentor.industry}</p>
                        <p><strong>Rating:</strong> {mentor.rating} / 5.0</p>
                        <p><strong>Reviews:</strong> {mentor.reviews} reviews</p>
                        <button className="btn btn-primary">Book Mentor</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MentorList;
