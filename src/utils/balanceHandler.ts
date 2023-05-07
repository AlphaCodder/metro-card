import { card, journey, location, passengerType, charges } from "../types";

// this function will keep track of the balance of the card
// it will also keep track of the journey history of the card
// that is how much money was collected at each station and discount given
// it will also keep track of the number and type of passengers who travelled
// if the passenger is adult fee is 200, senior citizen is 100 and kid is 50
// if the passenger does a return trip discount of 50% is given
// if the passenger doesnt have enough balance the card is recharge with the remaining amount and extra 3% is charged

export const balanceHandler = (cardDB: card[], journeyDB: journey[]) => {

    const stationCollection = {
        central : {
            collection: 0,
            discount: 0,
            adult: 0,
            kid: 0,
            seniorCitizen: 0,
        },
        airport : {
            collection: 0,
            discount: 0,
            adult: 0,
            kid: 0,
            seniorCitizen: 0,
        },
    }

    journeyDB.forEach(journey => {
        // select the card from the cardDB with the name of the journey
        const currentCard = cardDB.find(card => card.name === journey.name)
        if(!currentCard) return

        if(currentCard.balance < charges[journey.passengerType]) {
            
        currentCard.balance -= charges[journey.passengerType]

    })
    return cardDB
}