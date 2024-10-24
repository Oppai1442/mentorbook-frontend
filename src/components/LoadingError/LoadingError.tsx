import React from 'react';
import styles from './LoadingError.module.css';

interface Mode {
    type: 'loading' | 'error';
    message?: string;
    style?: React.CSSProperties;
}

const LoadingError: React.FC<Mode> = ({ type, message, style }) => {
    return (
        <div className={type === 'loading' ? styles.loadingContainer : styles.errorContainer}>
            <i
                className={type === 'loading' ? "fa-regular fa-spinner-third fa-spin" : "fa-regular fa-triangle-exclamation"}
                style={style}
            ></i>
            <p>{message}</p>
        </div>
    );
};

export default LoadingError;