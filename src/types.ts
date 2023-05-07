export interface card {
    name : string,
    balance : number
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