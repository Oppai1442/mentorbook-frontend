import React, { useState } from 'react';
import styles from './Calendar.module.css';

interface SearchBarProps {
    placeholder?: string;
    onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search", onSearchChange }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchValue(value);
        onSearchChange(value);
    };

    return (
        <div className={`${styles['input-group']} ${styles['me-2']} ${styles['me-lg-3']} ${styles['fmxw-400']}`}>
            <span className={`${styles['input-group-text']}`}>
                <i className="fa-light fa-magnifying-glass" />
            </span>
            <input
                type="text"
                value={searchValue}
                className={`${styles['input']} ${styles['form-control']}`}
                placeholder={placeholder}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchBar;
