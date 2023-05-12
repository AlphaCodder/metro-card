import { card, journey, location, passengerType, charges, STCollection } from "../types";
import { fares, SFMultiplier } from "../const";
import { outputHandler } from "./outputHandler";

// this function will keep track of the balance of the card
// it will also keep track of the journey history of the card
// that is how much money was collected at each station and discount given
// it will also keep track of the number and type of passengers who travelled
// if the passenger is adult fee is 200, senior citizen is 100 and kid is 50
// if the passenger does a return trip discount of 50% is given
// if the passenger doesnt have enough balance the card is recharge with the remaining amount and extra 3% is charged

export const balanceHandler = (cardDB: card[], journeyDB: journey[]) => {

    const stationCollection = STCollection

    journeyDB.forEach(journey => {
        const currentCard = cardDB.find(card => card.name === journey.name)
        if(!currentCard) return

        // if the passenger is doing a return trip give a discount of 50%
        const currentfare = fares[journey.passengerType] * (currentCard.journeyCount % 2 === 1 ? 0.5 : 1)
        stationCollection[journey.location].discount += fares[journey.passengerType] - currentfare

        // deduct the fare from the card balance and add it to the station collection
        if(currentCard.balance < currentfare){
            stationCollection[journey.location].collection 
                += currentfare + ((currentfare - currentCard.balance) * SFMultiplier)
            currentCard.balance = 0
        }
        else{
            stationCollection[journey.location].collection += currentfare
            currentCard.balance -= currentfare
        }
        currentCard.journeyCount += 1
        stationCollection[journey.location][journey.passengerType] += 1

    })
    return outputHandler(stationCollection)
}