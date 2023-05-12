import { location, passengerType, card, journey } from "./types";
import { balanceHandler } from "./utils/balanceHandler";

// vault will store the cards
export const vault = () => {
    // create an array of card 
    const cardDB: Array<card> = [];
    const journeyDB: Array<journey> = [];
    return {
        balance(name: string, balance: number) {
            cardDB.push({ name, balance, journeyCount: 0 });
        },
        checkIn(name: string, passengerType: passengerType, location: location){
            journeyDB.push({ name, passengerType, location });
        },
        printSummary() {
            return balanceHandler(cardDB, journeyDB);
        }
    }
}