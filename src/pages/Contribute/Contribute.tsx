import React from 'react';

interface Contributor {
  name: string;
  role: string;
  description: string;
  image: string;
}

interface Partner {
  name: string;
  logo: string;
  website: string;
}

const contributors: Contributor[] = [
  {
    name: 'Nguyễn Văn A',
    role: 'Full-stack Developer',
    description: 'Phát triển các tính năng chính của website.',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Trần Thị B',
    role: 'UI/UX Designer',
    description: 'Thiết kế giao diện và trải nghiệm người dùng.',
    image: 'https://via.placeholder.com/150'
  }
];

const partners: Partner[] = [
  {
    name: 'Công ty ABC',
    logo: 'https://via.placeholder.com/100',
    website: 'https://abc.com'
  },
  {
    name: 'Công ty XYZ',
    logo: 'https://via.placeholder.com/100',
    website: 'https://xyz.com'
  }
];

const Contribute: React.FC = () => {
  return (
    <div className="container my-5">
      <div className="text-center my-4">
        <h1 className="display-4 fw-bold" style={{ color: '#4a4e69' }}>Our Contributors</h1>
        <p className="lead" style={{ color: '#9a8c98' }}>Those who made this project possible</p>
      </div>

      {/* Contributors Section */}
      <section className="mb-5">
        <h2 className="text-center mb-4" style={{ color: '#22223b' }}>Meet Our Team</h2>
        <div className="row justify-content-center">
          {contributors.map((contributor, index) => (
            <div className="col-md-4 mb-5" key={index}>
              <div 
                className="card shadow border-0 h-100" 
                style={{ 
                  borderRadius: '20px', 
                  overflow: 'hidden', 
                  transform: 'scale(1)', 
                  transition: 'transform 0.3s ease-in-out'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <div 
                  className="position-relative" 
                  style={{ 
                    height: '150px', 
                    background: 'linear-gradient(to right, #6d597a, #b56576)'
                  }}
                >
                  <img 
                    src={contributor.image} 
                    className="rounded-circle position-absolute top-50 start-50 translate-middle border border-light border-4 shadow-lg" 
                    alt={contributor.name} 
                    style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body text-center mt-4">
                  <h5 className="card-title" style={{ color: '#22223b' }}>{contributor.name}</h5>
                  <h6 className="card-subtitle mb-3" style={{ color: '#9a8c98' }}>{contributor.role}</h6>
                  <p className="card-text text-muted">{contributor.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section>
        <h2 className="text-center mb-4" style={{ color: '#22223b' }}>Our Partners</h2>
        <div className="row justify-content-center">
          {partners.map((partner, index) => (
            <div className="col-md-3 mb-5" key={index}>
              <div 
                className="card h-100 shadow border-0 text-center" 
                style={{ 
                  borderRadius: '15px', 
                  overflow: 'hidden',
                  background: 'linear-gradient(to bottom right, #4a4e69, #22223b)',
                  color: 'white',
                  transition: 'transform 0.3s ease-in-out'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <div className="card-body d-flex flex-column align-items-center">
                  <img 
                    src={partner.logo} 
                    className="rounded-circle border border-3 border-light shadow-sm mb-4" 
                    alt={partner.name} 
                    style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                  />
                  <h5 className="card-title mb-3">{partner.name}</h5>
                  <a 
                    href={partner.website} 
                    className="btn btn-outline-light mt-auto" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ width: '100%' }}
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contribute;
