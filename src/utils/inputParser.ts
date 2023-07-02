import { operation, passengerType, locationType } from "../types"

export const inputParser = (input: string): operation => {
  const inputArray = input.split(' ')
  const operation = inputArray[0]
  const cardNumber = inputArray[1]
  const balance = parseInt(inputArray[2])
  const passengerType = inputArray[2] as passengerType
  const locationType = inputArray[3] as locationType
  
  switch (operation) {
    case 'BALANCE':
      return {
        operation: 'BALANCE',
        cardNumber: cardNumber,
        balance: balance
      }
    case 'CHECK_IN':
      return {
        operation: 'CHECK_IN',
        cardNumber: cardNumber,
        passengerType: passengerType,
        fromStation: locationType
      }
    case 'PRINT_SUMMARY':
      return {
        operation: 'PRINT_SUMMARY'
      }
    default:
      throw new Error('Invalid operation')
  }
}