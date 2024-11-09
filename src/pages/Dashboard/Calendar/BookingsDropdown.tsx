// BookingsDropdown.tsx
import React, { useEffect, useRef, useState } from 'react';
import styles from './BookingsDropdown.module.css';
import { bookings } from '../../../types/Response';

interface DropdownButtonProps {
    booking: bookings | null;
    onAccept: (booking: bookings) => void;
    onReject: (booking: bookings) => void;
    onViewDetails: (booking: bookings) => void;
    onFinish: (booking: bookings) => void;
}

const BookingsDropdown: React.FC<DropdownButtonProps> = ({ booking, onAccept, onReject, onViewDetails, onFinish }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Kiểm tra trạng thái để hiển thị hoặc ẩn nút
    if (!booking || (booking.status.toLowerCase() === 'finish' || booking.status.toLowerCase() === 'rejected')) {
        return null;
    }

    return (
        <div className={`${styles['btn-group']}`} ref={dropdownRef}>
            <button
                className={`${styles['button']} ${styles['btn']} ${styles['btn-link']} ${styles['text-dark']} ${styles['m-0']} ${styles['p-0']}`}
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
            >
                <i className={`fa-solid fa-ellipsis fa-lg`} />
                <span className={`${styles['visually-hidden']}`}>Toggle Dropdown</span>
            </button>
            {isDropdownOpen && (
                <div className={`${styles['dropdown-menu']}`}>
                    {booking.status.toLowerCase() === 'pending' && (
                        <>
                            <div className={`${styles['dropdown-item']}`} onClick={() => onAccept(booking)}>
                                <span className={`${styles['fas']} ${styles['fa-check']} ${styles['me-2']}`} />
                                Accept
                            </div>
                            <div className={`${styles['dropdown-item']} ${styles['text-danger']}`} onClick={() => onReject(booking)}>
                                <span className={`${styles['fas']} ${styles['fa-trash-alt']} ${styles['me-2']}`} />
                                Reject
                            </div>
                        </>
                    )}
                    {booking.status.toLowerCase() === 'accepted' && (
                        <div className={`${styles['dropdown-item']}`} onClick={() => onFinish(booking)}>
                            <span className={`${styles['fas']} ${styles['fa-check-circle']} ${styles['me-2']}`} />
                            Finish
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default BookingsDropdown;
