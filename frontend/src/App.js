import ReservationForm from './components/reservationForm';
import ReservationList from './components/reservationList';
import ReservationUpdate from './components/updateReservation';
import ReservationDelete from './components/deleteReservation';
import ReservationDetails from './components/reservationDetails';
import './App.css';



const App = () => {
  return (
    <div className="home">
      <h1>Restaurant Reservation System</h1>
      <ReservationList />
      <div className='form-container'>
        <ReservationForm />
        <ReservationUpdate />
        <ReservationDelete />
      </div>
      <ReservationDetails />
    </div>
  );
};

export default App;
