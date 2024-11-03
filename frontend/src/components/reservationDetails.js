import { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

const ReservationDetails = () => {
    const [reservation, setReservation] = useState(null);
    const [reservationId, setReservationId] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchDetails = async (e) => {
        console.log("fetch details");
        e.preventDefault();
        if (!reservationId.trim()) {
          setError('Please enter a reservation ID');
          return;
        }
    
        try {
          setLoading(true);
          setError(null);
          const response = await axios.get(`${API_URL}/reservations/${reservationId}`);
          setReservation(response.data);
        } catch (err) {
          setError(err.message || 'Failed to fetch reservation details');
          setReservation(null);
        } finally {
          setLoading(false);
        }
      };

    return (
        <div className='list'>
            <h2>Reservation Details</h2>
            
            <form className='form2' onSubmit={fetchDetails}>
                <label className='input'>
                    Reservation ID:
                    <input
                    className='input-field'
                    type="text"
                    value={reservationId}
                    onChange={(e) => setReservationId(e.target.value)}
                    placeholder="Enter Reservation ID"
                    />
                </label>
            <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Search'}
            </button>
            </form>

            {error && (
                <div>Error: {error}</div>
            )}

            {reservation ? (
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Party Size</th>
                            <th>Restaurant</th>
                            <th>Customer</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{reservation.id}</td>
                            <td>{new Date(reservation.reservation_date).toLocaleString()}</td>
                            <td>{reservation.number_of_people}</td>
                            <td>{reservation.restaurant_name}</td>
                            <td>{reservation.customer_name}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                !loading && <div>Enter a reservation ID to load data.</div>
            )}
    </div>
    );
};

export default ReservationDetails;