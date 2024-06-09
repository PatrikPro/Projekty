import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

function MyTrips() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const storedTrips = JSON.parse(localStorage.getItem('trips')) || [];
    setTrips(storedTrips);
  }, []);

  return (
    <Container>
      <h1 className="mt-4">Your Planned Trips</h1>
      <Row>
        {trips.length === 0 ? (
          <p>You have no planned trips.</p>
        ) : (
          trips.map((trip, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{trip.destination.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{trip.destination.location}</Card.Subtitle>
                  <Card.Text>
                    <strong>Description:</strong> {trip.description}<br />
                    <strong>Transportation:</strong> {trip.transportation}<br />
                    <strong>Accommodation:</strong> {trip.accommodation}<br />
                    <strong>Estimated Cost:</strong> {trip.estimatedCost}<br />
                    <strong>Date From:</strong> {trip.dateFrom}<br />
                    <strong>Date To:</strong> {trip.dateTo}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default MyTrips;
