import fs from 'fs'
import { card } from "../types";

export const saveCard = async (newCard: card) => {
  fs.writeFile(`./src/data/${newCard.cardNumber}.json`, JSON.stringify(newCard), (err) => {
    if (err) { throw err.message }
  })
}

export const createCard = (cardNumber: string, balance: number) => {
    const newCard: card = {
        cardNumber,
        balance,
        discountApplied: false
    }
    saveCard(newCard)
}

export const updateCard = async (cardNumber: string, passengerType: string, fromStation: string) => {
  
}
