import React from 'react'
import { useDispatch } from 'react-redux'
import { addCustomer } from '../features/customerSlice'
import { removeReservation } from '../features/reservationSlice'

import { v4 as uuid } from "uuid"

const ReservationCard = ({ name, index }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <div onClick={() => {
        dispatch(removeReservation(index))
        dispatch(addCustomer({
          id: uuid(),
          name: name,
          food: []
        }))
      }} className="reservation-card-container">{name}</div>
    </div>
  )
}

export default ReservationCard