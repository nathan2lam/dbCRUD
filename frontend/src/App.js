import ReservationForm from './components/reservationForm';
import ReservationList from './components/reservationList';
import ReservationUpdate from './components/updateReservation';
import ReservationDelete from './components/deleteReservation';
import './App.css';

// export const deleteReservation = async (id) => {
//   const response = await axios.delete(`${API_URL}/reservations/${id}`);
//   return response.data;
// };

const App = () => {
  return (
    <div>
      <h1>Restaurant Reservation System</h1>
      <ReservationForm />
      <ReservationList />
      <ReservationUpdate />
      <ReservationDelete />
    </div>
  );
};

export default App;
