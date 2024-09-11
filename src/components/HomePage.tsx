import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import axios from 'axios';

interface Mentor {
  id: number;
  fullName: string;
  skills: string[];
  bio: string;
  availableSlots: string[];
}

const HomePage: React.FC = () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch mentors from the API
    const fetchMentors = async () => {
      try {
        const response = await axios.get('/api/mentors'); // Change to your actual API endpoint
        setMentors(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load mentors');
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  return (
    <Container>
      <h1 className="my-4 text-center">Find Your Mentor</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <Row>
          {mentors.map((mentor) => (
            <Col key={mentor.id} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{mentor.fullName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Skills: {mentor.skills.join(', ')}
                  </Card.Subtitle>
                  <Card.Text>{mentor.bio}</Card.Text>
                  <Button variant="primary">Book a Session</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default HomePage;
