import ReservationForm from './components/reservationForm';
import ReservationList from './components/reservationList';
import RestaurantList from './components/restaurantList';
import CustomerList from './components/customerList';
import RestaurantMenu from './components/restaurantMenu';
import RestaurantReviews from './components/restaurantReviews';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const createReservation = async (reservation) => {
  const response = await axios.post(`${API_URL}/reservations`, reservation);
  return response.data;
};

export const getReservations = async () => {
  const response = await axios.get(`${API_URL}/reservations`);
  return response.data;
};

export const updateReservation = async (id, reservation) => {
  const response = await axios.put(`${API_URL}/reservations/${id}`, reservation);
  return response.data;
};

export const deleteReservation = async (id) => {
  const response = await axios.delete(`${API_URL}/reservations/${id}`);
  return response.data;
};

export const getRestaurants = async () => {
  const response = await axios.get(`${API_URL}/restaurants`);
  return response.data;
};

export const getCustomers = async () => {
  const response = await axios.get(`${API_URL}/customers`);
  return response.data;
};

export const getRestaurantMenu = async (id) => {
  const response = await axios.get(`${API_URL}/restaurants/${id}/menu`);
  return response.data;
};

export const getRestaurantReviews = async (id) => {
  const response = await axios.get(`${API_URL}/restaurants/${id}/reviews`);
  return response.data;
};
const App = () => {
  return (
    <div>
      <h1>Restaurant Reservation System</h1>
      {/* <ReservationForm />
      <ReservationList />
      <RestaurantList />
      <CustomerList />
      <RestaurantMenu restaurantId={1} />
      <RestaurantReviews restaurantId={1} /> */}
    </div>
  );
};

export default App;
