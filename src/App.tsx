// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import routes from './routes';
import Navbar from './components/Navbar';
import ChatBubble from './components/ChatBubble';
import Footer from './components/Footer';
import { pageConfigs } from './config/pageConfig';
import './styles/global.css'
import './assets/fontawesome/css/all.css'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const path = location.pathname.substring(1) || 'home';
  const config = pageConfigs[path] || pageConfigs['notFound'];

  return (
    <>
      {config.showNav && <Navbar />}
      <main>{children}</main>
      {<ChatBubble/>}
      {config.showFooter && <Footer />}
    </>
  );
};

const App: React.FC = () => {

  return (
    <Router>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
