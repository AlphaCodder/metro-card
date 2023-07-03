import { operation } from "../types"
import { createCard, updateCard } from "./card"
import { outputHandler } from "./output"

export const inputHandler = (input: operation) => {
  switch (input.operation) {
    case 'BALANCE':
      return createCard(input.cardNumber, input.balance)
    case 'CHECK_IN':
      return updateCard(input.cardNumber, input.passengerType, input.fromStation)
    case 'PRINT_SUMMARY':
      return outputHandler()
    default:
      return `Invalid Input`
  }
}