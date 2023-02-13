import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFoodToCustomer } from '../features/customerSlice'

const CustomerCard = ({ id, name, food }) => {
  const dispatch = useDispatch()
  const [customerFoodInput, setCustomerFoodInput] = useState("")

  return (
    <div>
      <div className="customer-food-card-container">
        <p>{name}</p>
        <div className="customer-foods-container">
          <div className="customer-food">
            {food.map((foodName, index) => {
              return <p key={index}>{foodName}</p>
            })}
          </div>
          <div className="customer-food-input-container">
            <input
              value={customerFoodInput}
              onChange={(event) => setCustomerFoodInput(event.target.value)}
            />
            <button onClick={
              () => {
                if (!customerFoodInput) return
                dispatch(addFoodToCustomer({
                  id: id,
                  food: customerFoodInput
                }))
                setCustomerFoodInput("")
              }
            }>Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerCard