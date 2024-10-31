// Dashboard.tsx
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import { useAuth } from '../../context';

const Dashboard = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate('/');
  //   }
  // }, [isLoggedIn, navigate]);

  // if (!isLoggedIn) return null;

  return (
    <div className={styles.dashboardLayout}>
      <Sidebar />
      <div className={styles.dashboardMain}>
        <header className={styles.navbar}><Navbar/></header>
        <div className={styles.dashboardContent}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
