// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { pageConfigs } from './config/pageConfig';
import { ToastProvider } from './context/ToastContext';

import { routes } from './routes';
import { Navbar } from './components/Navbar';
import { ChatBubble } from './components/ChatBubble';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/Cookie';

import styles from './styles/App.module.css';
import './styles/global.css'
import './assets/fontawesome/css/fontawesome.all.css'
import { AuthProvider } from './context/AuthContext';
import { WebSocketProvider } from './context';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const path = location.pathname.substring(1) || 'home';
  const config = pageConfigs[path] || pageConfigs['notFound'];

  return (
    <>
      <WebSocketProvider url="">
        <ToastProvider>
          <AuthProvider>
            {config.showNav && <Navbar />}
            <main className={`${styles['mainContainer']}`}>{children}</main>
            {config.showCookie && <CookieConsent />}
            {config.showChatBubble && <ChatBubble />}
            {config.showFooter && <Footer />}
          </AuthProvider>
        </ToastProvider>
      </WebSocketProvider>
    </>
  );
};

const App: React.FC = () => {
  return (
    // App.tsx
    <Router>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            >
              {route.children &&
                route.children.map((child) => (
                  <Route
                    key={child.path}
                    path={child.path}
                    element={child.element}
                  />
                ))
              }
            </Route>
          ))}
        </Routes>
      </Layout>
    </Router>

  );
};

export default App;
