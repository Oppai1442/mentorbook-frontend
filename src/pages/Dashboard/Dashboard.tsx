import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import { useAuth } from '../../context';

const Dashboard = () => {
  const { isLoggedIn, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, loading]);

  if (loading) return null;

  return (
    <>
      <div className={styles.dashboardLayout}>
        <Sidebar />
        <div className={styles.dashboardMain}>
          <header className={styles.navbar}><Navbar /></header>
          <div className={styles.dashboardContent}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
