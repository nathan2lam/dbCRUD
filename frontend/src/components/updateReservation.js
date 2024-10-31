import { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

const ReservationUpdate = () => {
    const [formData, setFormData] = useState({
        id: '',
        date: '',
        guests: ''
    });

    const updateReservation = async (reservation) => {
        console.log("Updating reservation");
        const response = await axios.put(`${API_URL}/reservations/:id`, reservation);
        return response.data;
      };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateReservation(formData);
            setFormData({ id: '', date: '', guests: '' });
        } catch (error) {
            console.error('Error updating reservation: ', error);
        }
    };


    return (
        <form className='form' onSubmit={handleSubmit}>
            <h2>Update a Reservation</h2>

            <label className='input'>
                Reservation ID:
                <input
                className="input-field"
                type="number"
                name="id"
                value={formData.id}
                onChange={handleChange}
                required
                />
            </label>
            <label className='input'>
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
            <label className='input'>
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
            <button type="submit">Update Reservation</button>
        </form>
    )
}

export default ReservationUpdate;