import React from 'react';
import styles from './LoadingError.module.css';

const LoadingError: React.FC<{ type: 'loading' | 'error'; message?: string }> = ({ type, message }) => {
    return (
        <div className={type === 'loading' ? styles.loadingContainer : styles.errorContainer}>
            <i className={type === 'loading' ? "fa-regular fa-spinner-third fa-spin" : "fa-regular fa-triangle-exclamation"}></i>
            <p>{`${message}`}</p>
        </div>
    );
};

export default LoadingError;