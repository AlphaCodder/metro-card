import { operation } from "../types"
import { createCard, updateCard } from "./card"

export const inputHandler = (input: operation) => {
  switch (input.operation) {
    case 'BALANCE':
      createCard(input.cardNumber, input.balance)
      return `Card Number: ${input.cardNumber} Balance: ${input.balance}`
    case 'CHECK_IN':
      updateCard(input.cardNumber, input.passengerType, input.fromStation)
      return `Card Number: ${input.cardNumber} Passenger Type: ${input.passengerType} From Station: ${input.fromStation}`
    case 'PRINT_SUMMARY':
      return `Print Summary`
    default:
      return `Invalid Input`
  }
}