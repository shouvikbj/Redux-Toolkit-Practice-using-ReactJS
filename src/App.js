import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {
  const [reservationNameInput, setReservationNameInput] = useState("")
  const reservations = useSelector((state) => state.reservations.value)
  const customers = useSelector((state) => state.customers.value)
  const dispatch = useDispatch()

  const handleAddReservations = () => {
    if (!reservationNameInput) return
    dispatch(addReservation(reservationNameInput))
    setReservationNameInput("")
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard name={name} index={index} key={index} />
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationNameInput} onChange={(event) => setReservationNameInput(event.target.value)} />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer, index) => {
            return <CustomerCard name={customer.name} id={customer.id} food={customer.food} key={index} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;