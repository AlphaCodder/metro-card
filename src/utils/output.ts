import { collection, locationType, passengerType } from "../types"
import { getCollection } from "./collection"

export const outputParser = (location: locationType) => {
  const locationCollection: collection = getCollection(location)
  var output = `TOTAL_COLLECTION CENTRAL ${locationCollection.total} ${locationCollection.discount}\n`
               + `PASSENGER_TYPE_SUMMARY\n`

  const passengerType = locationCollection.passengerTypeSummary
  for (let prop in passengerType) {
    if (passengerType.hasOwnProperty(prop) && typeof passengerType[prop as passengerType] !== 'undefined') {
      output += `${prop} ${passengerType[prop as passengerType]}\n`
    }
  }
  
  return output
}

export const outputHandler = () => {
  const locations = ['AIRPORT', 'CENTRAL']
  locations.forEach(location => {
    console.log(outputParser(location as locationType))
  })
}