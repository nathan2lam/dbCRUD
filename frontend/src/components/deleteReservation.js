import { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

const ReservationDelete = () => {
    const [id, setId] = useState('');

    const deleteReservation = async (id) => {
        console.log("Delete Reservation");
        console.log(id);
        const response = await axios.delete(`${API_URL}/reservations/id`, {
            params: { id }
        });
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
        <form className='form' onSubmit={handleSubmit}>
            <h2>Delete a reservation</h2>

            <label className='input'>
                Reservation ID:
                <input
                className="input-field"
                type='number'
                name='id'
                value={id}
                onChange={handleChange}
                required
                />
            </label>
            <button type="submit">Delete Reservation</button>
        </form>
    )
}

export default ReservationDelete;