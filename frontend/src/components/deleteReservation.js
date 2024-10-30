import { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

const ReservationDelete = () => {
    const [id, setId] = useState('');

    const deleteReservation = async (id) => {
        const response = await axios.delete(`${API_URL}/reservations/id`, id);
        return response.data;
      };

    const handleChange = (e) => {
        setId(e.target.value);
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await deleteReservation(id);
            setId('');
        } catch (error) {
            console.error('Error deleting reservation: ', error);
        }
    }


    return (
        <div>
            <h2>Delete a reservation</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    Reservation ID:
                    <input
                    type='number'
                    name='id'
                    value={id}
                    onChange={handleChange}
                    required
                    />
                </label>
            </form>
        </div>
    )
}

export default ReservationDelete;