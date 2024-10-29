import React, { useState } from 'react';
import axios from 'axios';

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchReservations = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('/reservations');
      setReservations(response.data);
    } catch (err) {
      setError(err.message || 'Failed to fetch reservations');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    fetchReservations();
  };

  return (
    <div>
      <h2>Reservations</h2>
      
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Loading...' : 'Load Reservations'}
      </button>

      {error && (
        <div>Error: {error}</div>
      )}

      {reservations.length > 0 ? (
        <table>
          <thead>
            <tr>
              {Object.keys(reservations[0]).map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={index}>
                {Object.values(reservation).map((value, i) => (
                  <td key={i}>{value?.toString()}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && <div>No reservations found. Click the button to load data.</div>
      )}
    </div>
  );
};

export default ReservationList;
