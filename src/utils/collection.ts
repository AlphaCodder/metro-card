import * as fs from "fs"
import { collection, locationType, passengerType } from '../types'

export const initCollection = async () => {
  const setCollection = {
    total: 0,
    discount: 0,
    passengerTypeSummary: {
    }
  } 

  const locations = ['CENTRAL', 'AIRPORT']
  locations.forEach(location => {
    fs.writeFile(`./src/data/${location}.json`, JSON.stringify(setCollection), (err) => {
      if (err) { throw err.message }
    })
  })

}

export const getCollection = (location: locationType): collection => {
  const data = fs.readFileSync(`./src/data/${location}.json`, 'utf8')
  return JSON.parse(data)
}

export const setCollection = (location: locationType, collection: { total: number, discount: number }) => {
  fs.writeFileSync(`./src/data/${location}.json`, JSON.stringify(collection), { encoding: 'utf8'})
}

export const updateCollection = (total: number, discount: number, location: locationType, passengerType: passengerType) => {
  const collection = getCollection(location)
  collection.total += total
  collection.discount += discount
  collection.passengerTypeSummary[passengerType] = collection.passengerTypeSummary[passengerType] ? collection.passengerTypeSummary[passengerType] as unknown as number + 1 : 1
  setCollection(location, collection)
}