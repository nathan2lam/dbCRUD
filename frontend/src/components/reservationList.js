import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchReservations = async () => {
    try {
      console.log("fetch resersvations");
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_URL}/reservations`);
      setReservations(response.data);
    } catch (err) {
      setError(err.message || 'Failed to fetch reservations');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Reservations</h2>
      
      <button onClick={fetchReservations} disabled={loading}>
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
        !loading && <div>Click the button to load data.</div>
      )}
    </div>
  );
};

export default ReservationList;
