import { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000';
const ReservationForm = () => {
  const [formData, setFormData] = useState({
    restaurant: '',
    name: '',
    date: '',
    guests: ''
  });

   const createReservation = async (reservation) => {
    console.log("create reservation");
    const response = await axios.post(`${API_URL}/reservations`, reservation);
    console.log("response returned");
    return response.data;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(e.target.value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("handle submit");
      await createReservation(formData);
      setFormData({ restaurant: '', name: '', date: '', guests: '' }); // Reset the form fields
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Restaurant:
        <input
          type="text"
          name="restaurant"
          value={formData.restaurant}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Guests:
        <input
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
