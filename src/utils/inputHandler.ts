import { operation } from "../types"
import { createCard, updateCard } from "./card"

export const inputHandler = (input: operation) => {
  switch (input.operation) {
    case 'BALANCE':
      return createCard(input.cardNumber, input.balance)
    case 'CHECK_IN':
      return updateCard(input.cardNumber, input.passengerType, input.fromStation)
    case 'PRINT_SUMMARY':
      return `Print Summary`
    default:
      return `Invalid Input`
  }
}