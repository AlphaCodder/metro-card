export type card = {
    cardNumber : string
    balance : number
    discountApplied : boolean
}

export type collection = {
    total: 0,
    discount: 0
} 

export type passengerType = 'ADULT' | 'KID' | 'SENIOR_CITIZEN'

export type locationType = 'CENTRAL' | 'AIRPORT'

export const FARES = {
    ADULT: 200,
    KID: 50,
    SENIOR_CITIZEN : 100,
}

export const SFMULTIPLIER = 0.02

export const DCMULTIPLIER = 0.5

export interface BALANCE {
    operation : 'BALANCE'
    cardNumber : string
    balance : number
}

export interface CHECK_IN {
    operation: 'CHECK_IN'
    cardNumber : string
    passengerType : passengerType
    fromStation : locationType
}

export interface PRINT_SUMMARY {
    operation : 'PRINT_SUMMARY'
}

export type operation = BALANCE | CHECK_IN | PRINT_SUMMARY
