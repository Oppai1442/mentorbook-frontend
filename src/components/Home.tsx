// Home.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <h2>{process.env.REACT_APP_API_URL}</h2>
      <p>Đây là trang giới thiệu của ứng dụng.</p>
    </div>
  );
};

export default Home;