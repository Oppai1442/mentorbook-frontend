import React, { useState, useEffect } from 'react';
import styles from './LoadingError.module.css';

interface Mode {
    type: 'loading' | 'error';
    message?: string;
    style?: React.CSSProperties;
}

const randomIcons = [
    "fa-regular fa-spinner-third",
    "fa-duotone fa-solid fa-spinner-third",
    "fa-thin fa-spinner-third",
    "fa-solid fa-loader",
    "fa-duotone fa-solid fa-loader"
];

const getUniqueRandomIcon = (previousIcon: string | undefined) => {
    let newIcon;
    do {
        const randomIndex = Math.floor(Math.random() * randomIcons.length);
        newIcon = randomIcons[randomIndex];
    } while (newIcon === previousIcon);
    return newIcon;
};

const LoadingError: React.FC<Mode> = ({ type, message, style }) => {
    const [iconClass, setIconClass] = useState<string>(() => {
        return type === 'loading' ? getUniqueRandomIcon(undefined) : "fa-regular fa-triangle-exclamation";
    });

    useEffect(() => {
        if (type === 'loading') {
            setIconClass(prevIcon => getUniqueRandomIcon(prevIcon));
        } else {
            setIconClass("fa-regular fa-triangle-exclamation");
        }
    }, [type]);

    return (
        <div className={type === 'loading' ? styles.loadingContainer : styles.errorContainer}>
            <i
                className={`${iconClass} ${type === 'loading' ? 'fa-spin' : ''}`}
                style={style}
            ></i>
            <p style={style}>{message}</p>
        </div>
    );
};

export default LoadingError;