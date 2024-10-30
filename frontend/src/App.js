import ReservationForm from './components/reservationForm';
import ReservationList from './components/reservationList';
import ReservationUpdate from './components/updateReservation';
import ReservationDelete from './components/deleteReservation';
import './App.css';



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
