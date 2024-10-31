import { useState } from 'react';
import axios from 'axios';
import './reservationForm.css';

const API_URL = 'http://localhost:8000';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    restaurant: '',
    name: '',
    date: '',
    guests: ''
  });

   const createReservation = async (reservation) => {
    const response = await axios.post(`${API_URL}/reservations`, reservation);
    return response.data;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createReservation(formData);
      setFormData({ restaurant: '', name: '', date: '', guests: '' }); // Reset the form fields
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Create a reservation</h2>

      <label className="input">
        Restaurant:
        <select
          className="input-field"
          name="restaurant"
          value={formData.restaurant}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select a restaurant</option>
          <option value="The Italian Place">The Italian Place</option>
          <option value="Sushi World">Sushi World</option>
          <option value="BBQ Haven">BBQ Haven</option>
          <option value="Vegan Delight">Vegan Delight</option>
        </select>
      </label>
      <label className="input">
        Name:
        <select
          className="input-field"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        >
          <option value='' disabled>Choose registered customer</option>
          <option value='Alice Johnson'>Alice Johnson</option>
          <option value='Bob Smith'>Bob Smith</option>
          <option value='Carol White'>Carol White</option>
          <option value='David Green'>David Green</option>
        </select>

      </label>
      <label className="input">
        Date:
        <input
          className="input-field"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>
      <label className="input">
        Guests:
        <input
          className="input-field"
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Create Reservation</button>
    </form>
  );
};

export default ReservationForm;
