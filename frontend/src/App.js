import ReservationForm from './components/reservationForm';
import ReservationList from './components/reservationList';
import './App.css';


// export const getReservations = async () => {
//   const response = await axios.get(`${API_URL}/reservations`);
//   return response.data;
// };

// export const updateReservation = async (id, reservation) => {
//   const response = await axios.put(`${API_URL}/reservations/${id}`, reservation);
//   return response.data;
// };

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
      {/* <RestaurantList />
      <CustomerList />
      <RestaurantMenu restaurantId={1} />
      <RestaurantReviews restaurantId={1} /> */}
    </div>
  );
};

export default App;
