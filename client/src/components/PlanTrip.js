import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import destinations from '../destinations.json'; // Předpokládáme, že máte seznam destinací v JSON souboru

function PlanTrip() {
  const location = useLocation();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(location.state?.destination || null);

  const [formData, setFormData] = useState({
    description: '',
    transportation: '',
    accommodation: '',
    estimatedCost: '',
    dateFrom: '',
    dateTo: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDestinationChange = (event) => {
    const selectedDestination = destinations.find(dest => dest.id === parseInt(event.target.value));
    setDestination(selectedDestination);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    alert('Your trip has been planned successfully!');
    navigate('/my-trips');
  };

  const handleCancel = () => {
    navigate('/top-100');
  };

  return (
    <Container>
      {!destination ? (
        <>
          <h1 className="mt-4">Select a Destination</h1>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formDestination">
              <Form.Label column sm={2}>Destination:</Form.Label>
              <Col sm={10}>
                <Form.Control as="select" onChange={handleDestinationChange}>
                  <option value="">Select a destination</option>
                  {destinations.map(dest => (
                    <option key={dest.id} value={dest.id}>{dest.name}</option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>
          </Form>
        </>
      ) : (
        <>
          <h1 className="mt-4">Plan Your Trip to {destination.name}</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formDescription">
              <Form.Label column sm={2}>Description:</Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter your notes here..."
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formTransportation">
              <Form.Label column sm={2}>Transportation:</Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="select"
                  name="transportation"
                  value={formData.transportation}
                  onChange={handleChange}
                >
                  <option value="">Select transportation</option>
                  <option value="foot">Foot</option>
                  <option value="plane">Plane</option>
                  <option value="car">Car</option>
                  <option value="bus">Bus</option>
                  <option value="train">Train</option>
                  <option value="boat">Boat</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formAccommodation">
              <Form.Label column sm={2}>Accommodation:</Form.Label>
              <Col sm={10}>
                <Form.Control
                  as="select"
                  name="accommodation"
                  value={formData.accommodation}
                  onChange={handleChange}
                >
                  <option value="">Select accommodation</option>
                  <option value="hotel">Hotel</option>
                  <option value="tent">Tent</option>
                  <option value="car">Car</option>
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formEstimatedCost">
              <Form.Label column sm={2}>Estimated Cost:</Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  name="estimatedCost"
                  value={formData.estimatedCost}
                  onChange={handleChange}
                  placeholder="Enter estimated cost"
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formDateFrom">
              <Form.Label column sm={2}>Date From:</Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="date"
                  name="dateFrom"
                  value={formData.dateFrom}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formDateTo">
              <Form.Label column sm={2}>Date To:</Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="date"
                  name="dateTo"
                  value={formData.dateTo}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Button variant="primary" type="submit" className="me-2">
              Finish
            </Button>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </Form>
        </>
      )}
    </Container>
  );
}

export default PlanTrip;
