import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const industries = ['Software Engineering', 'Data Science', 'Product Management', 'Marketing'];
const ratings = [5, 4, 3, 2, 1];

const Sidebar: React.FC = () => {
    const [selectedIndustry, setSelectedIndustry] = useState<string>('');
    const [selectedRating, setSelectedRating] = useState<number | null>(null);
    const [mentorName, setMentorName] = useState<string>('');
    const [minReviews, setMinReviews] = useState<number>(0);

    const handleResetFilters = () => {
        setSelectedIndustry('');
        setSelectedRating(null);
        setMentorName('');
        setMinReviews(0);
    };

    return (
        <div className={styles.sidebar}>
            <h4>Filter Mentors</h4>
            
            <div className={styles.filterSection}>
                <label className={`${styles.label}`} htmlFor="mentorName">Mentor Name</label>
                <input
                    id="mentorName"
                    type="text"
                    value={mentorName}
                    className={`form-control ${styles.input}`}
                    onChange={(e) => setMentorName(e.target.value)}
                />
            </div>
            
            <div className={styles.filterSection}>
                <label className={`${styles.label}`}>Industry</label>
                <select
                    value={selectedIndustry}
                    className={`form-select ${styles.select}`}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                >
                    <option value="">All Industries</option>
                    {industries.map((industry, index) => (
                        <option key={index} value={industry}>
                            {industry}
                        </option>
                    ))}
                </select>
            </div>
            
            <div className={styles.filterSection}>
                <label className={`${styles.label}`}>Minimum Rating</label>
                <select
                    value={selectedRating || ''}
                    className={`form-select ${styles.select}`}
                    onChange={(e) => setSelectedRating(Number(e.target.value))}
                >
                    <option value="">Any Rating</option>
                    {ratings.map((rating, index) => (
                        <option key={index} value={rating}>
                            {rating} stars & up
                        </option>
                    ))}
                </select>
            </div>
            
            <div className={styles.filterSection}>
                <label className={`${styles.label}`} htmlFor="minReviews">Minimum Reviews</label>
                <input
                    id="minReviews"
                    type="number"
                    className={`form-control ${styles.input}`}
                    value={minReviews}
                    onChange={(e) => setMinReviews(Number(e.target.value))}
                />
            </div>

            <button className={`btn btn-secondary w-100 ${styles.button}`} onClick={handleResetFilters}>
                Reset Filters
            </button>
        </div>
    );
};

export default Sidebar;
