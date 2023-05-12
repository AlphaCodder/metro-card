export interface card {
    name : string,
    balance : number
    journeyCount : number
}

export type command = {
    command: 'BALANCE' | 'CHECK_IN' | 'PRINT_SUMMARY',
    cardName?: string,
    balance?: number,
    passengerType?: passengerType,
    location?: location,
}

export type passengerType = 'ADULT' | 'KID' | 'SENIOR_CITIZEN'

export type location = 'CENTRAL' | 'AIRPORT'

export type journey = {
    name : string,
    passengerType : passengerType,
    location : location
}

export const charges = {
    ADULT: 200,
    KID: 50,
    SENIOR_CITIZEN : 100,
}

export const STCollection = {
    CENTRAL : {
        "collection": 0,
        "discount": 0,
        "ADULT": 0,
        "KID": 0,
        "SENIOR_CITIZEN": 0,
    },
    AIRPORT : {
        "collection": 0,
        "discount": 0,
        "ADULT": 0,
        "KID": 0,
        "SENIOR_CITIZEN": 0,
    },
}
