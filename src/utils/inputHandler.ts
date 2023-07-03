import { operation } from "../types"
import { createCard, updateCard } from "./card"
import { getCollection } from "./collection"

export const inputHandler = (input: operation) => {
  switch (input.operation) {
    case 'BALANCE':
      return createCard(input.cardNumber, input.balance)
    case 'CHECK_IN':
      return updateCard(input.cardNumber, input.passengerType, input.fromStation)
    case 'PRINT_SUMMARY':
      console.log('AIRPORT', getCollection('AIRPORT'))
      console.log('CENTRAL', getCollection('CENTRAL'))
      return ''
    default:
      return `Invalid Input`
  }
}