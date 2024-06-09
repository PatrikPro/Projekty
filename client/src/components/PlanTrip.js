import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PlanTrip() {
  const location = useLocation();
  const navigate = useNavigate();
  const destination = location.state?.destination;

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
    <div>
      <h1>Plan Your Trip to {destination?.name || 'selected destination'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Enter your notes here..." />
        </label>
        <label>
          Transportation:
          <select name="transportation" value={formData.transportation} onChange={handleChange}>
            <option value="">Select transportation</option>
            <option value="foot">Foot</option>
            <option value="plane">Plane</option>
            <option value="car">Car</option>
            <option value="bus">Bus</option>
            <option value="train">Train</option>
            <option value="boat">Boat</option>
          </select>
        </label>
        <label>
          Accommodation:
          <select name="accommodation" value={formData.accommodation} onChange={handleChange}>
            <option value="">Select accommodation</option>
            <option value="hotel">Hotel</option>
            <option value="tent">Tent</option>
            <option value="car">Car</option>
          </select>
        </label>
        <label>
          Estimated Cost:
          <input type="text" name="estimatedCost" value={formData.estimatedCost} onChange={handleChange} placeholder="Enter estimated cost" />
        </label>
        <label>
          Date From:
          <input type="date" name="dateFrom" value={formData.dateFrom} onChange={handleChange} />
        </label>
        <label>
          Date To:
          <input type="date" name="dateTo" value={formData.dateTo} onChange={handleChange} />
        </label>
        <button type="submit">Finish</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default PlanTrip;
