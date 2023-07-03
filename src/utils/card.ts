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
  const collection = getCollection(fromStation) as collection
  const currentFare = FARES[passengerType] * (card.discountApplied ? DCMULTIPLIER : 1)

  if(card.balance < currentFare) {
    collection.total += currentFare
    collection.total += (currentFare - card.balance ) * SFMULTIPLIER
    card.balance = 0
  } else {
    card.balance -= currentFare
  }
  collection.discount += currentFare * (card.discountApplied ? DCMULTIPLIER : 0)
  card.discountApplied = card.discountApplied ? false : true

  console.log('processes-------------?')
  saveCard(card)
  console.log(getCard(cardNumber))
  updateCollection(collection.discount, collection.total, fromStation)
  console.log('card', card)
  console.log('collection', collection)
}

updateCard('MC1', 'ADULT', 'CENTRAL')