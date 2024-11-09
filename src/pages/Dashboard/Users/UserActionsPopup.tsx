import React, { useState, useEffect, useRef } from 'react';
import styles from './UserActionsPopup.module.css';
import { User2 } from '../../../types/Model';

interface UserActionsPopupProps {
    user: User2;
    onActionClick: (userId: number, action: string) => void;
}

const UserActionsPopup: React.FC<UserActionsPopupProps> = ({ user, onActionClick }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className={styles['dropdown']} ref={dropdownRef}>
            <button
                className={`${styles['button']} ${styles['btn']} ${styles['btn-link']} ${styles['text-dark']} ${styles['dropdown-toggle']} ${styles['m-0']} ${styles['p-1']}`}
                onClick={toggleDropdown}
            >
                <i className="fa-solid fa-ellipsis fa-lg" />
                <span className={styles['visually-hidden']}>Toggle Actions Dropdown</span>
            </button>
            {isDropdownOpen && (
                <div className={`${styles['dropdown-menu']} ${styles['dropdown-menu-xs']} ${styles['mt-2']} ${styles['py-1']}`}>
                    <div
                        className={`${styles['dropdown-item']} ${styles['d-flex']} ${styles['align-items-center']}`}
                        onClick={() => onActionClick(user.userId, 'resetPass')}
                    >
                        <i className={`${styles['text-gray-400']} ${styles['me-2']} fa-solid fa-shield-exclamation fa-lg`} />
                        Reset Pass
                    </div>
                    <div
                        className={`${styles['dropdown-item']} ${styles['d-flex']} ${styles['align-items-center']}`}
                        onClick={() => onActionClick(user.userId, 'changeRole')}
                    >
                        <i className={`${styles['text-gray-400']} ${styles['me-2']} fa-solid fa-user-cog fa-lg`} />
                        Change Role
                    </div>
                    <div
                        className={`${styles['dropdown-item']} ${styles['d-flex']} ${styles['align-items-center']}`}
                        onClick={() => onActionClick(user.userId, 'changeStatus')}
                    >
                        <i className={`${styles['text-gray-400']} ${styles['me-2']} fa-solid fa-toggle-on fa-lg`} />
                        Change Status
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserActionsPopup;
