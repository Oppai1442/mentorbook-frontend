// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import routes from './routes';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Trang Chủ</Link>
          </li>
          <li>
            <Link to="/about">Giới Thiệu</Link>
          </li>
        </ul>
      </nav>
      <Navbar /> {/* Load Navbar */}

      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={React.createElement(route.element)} />
        ))}
      </Routes>
    </Router>
  );
};

export default App;