import fs from 'fs'
import { DCMULTIPLIER, FARES, SFMULTIPLIER, card, collection, locationType, passengerType } from "../types";
import { getCollection, updateCollection } from './collection';

export const saveCard = (newCard: card) => {
  fs.writeFileSync(
    `./src/data/${newCard.cardNumber}.json`,
    JSON.stringify(newCard), 
    { encoding: 'utf8'})
}

export const getCard = (cardName: string) => {
  const fileName = `./src/data/${cardName}.json`
  const data = fs.readFileSync(fileName, 'utf8')
  return JSON.parse(data) as card
}

export const createCard = (cardNumber: string, balance: number) => {
    const newCard: card = {
        cardNumber,
        balance,
        discountApplied: false
    }
    saveCard(newCard)
}

export const updateCard = (cardNumber: string, passengerType: passengerType, fromStation: locationType) => {
  const card: card = getCard(cardNumber)
  var total = 0
  var discount = 0
  const currentFare = FARES[passengerType] * (card.discountApplied ? DCMULTIPLIER : 1)

  if(card.balance < currentFare) {
    total += currentFare
    total += (currentFare - card.balance ) * SFMULTIPLIER
    card.balance = 0
  } else {
    total += currentFare
    card.balance -= currentFare
  }
  discount += currentFare * (card.discountApplied ? 1 : 0)
  card.discountApplied = card.discountApplied ? false : true

  saveCard(card)
  updateCollection(total, discount, fromStation)
}
