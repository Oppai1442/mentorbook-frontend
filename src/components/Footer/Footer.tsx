// src/components/Footer/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.module.css'; // Giả sử bạn có file CSS cho Footer

const Footer: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Footer;