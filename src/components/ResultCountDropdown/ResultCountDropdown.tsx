import React, { useState, useEffect, useRef } from 'react';
import styles from './ResultCountDropdown.module.css';

interface ResultCountDropdownProps {
    options: number[];
    onSelectCount: (value: number) => void;
}

const ResultCountDropdown: React.FC<ResultCountDropdownProps> = ({ options, onSelectCount }) => {
    const [isResultCountDropdownOpen, setResultCountDropdownOpen] = useState(false);
    const [selectedResultCount, setSelectedResultCount] = useState<number | null>(options[0] || null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (options.length > 0) {
            setSelectedResultCount(options[0]);
            onSelectCount(options[0]);
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setResultCountDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleResultCountDropdown = () => {
        setResultCountDropdownOpen((prev) => !prev);
    };

    const handleResultCountSelect = (value: number) => {
        setSelectedResultCount(value);
        onSelectCount(value);
        setResultCountDropdownOpen(false);
    };

    return (
        <div className={styles['dropdown']} ref={dropdownRef}>
            <button
                className={`${styles['button']} ${styles['btn']} ${styles['btn-link']} ${styles['text-dark']} ${styles['dropdown-toggle']} ${styles['m-0']} ${styles['p-1']}`}
                onClick={toggleResultCountDropdown}
            >
                <i className="fa-solid fa-gear fa-lg" />
                <span className={styles['visually-hidden']}>Toggle Result Count Dropdown</span>
            </button>
            {isResultCountDropdownOpen && (
                <div className={`${styles['dropdown-menu']} ${styles['dropdown-menu-xs']} ${styles['pb-0']}`}>
                    {options.map((option) => (
                        <div
                            key={option}
                            className={`${styles['dropdown-item']} ${styles['fw-bold']} ${
                                selectedResultCount === option ? `${styles['active']}` : ''
                            }`}
                            onClick={() => handleResultCountSelect(option)}
                        >
                            {option}
                            {selectedResultCount === option && (
                                <i
                                    className={`${styles['icon']} ${styles['icon-xxs']} ${styles['ms-auto']} fa-regular fa-check`}
                                    style={{ marginLeft: '2rem' }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ResultCountDropdown;
