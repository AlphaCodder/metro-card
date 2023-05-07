import { vault } from "./vault";
import { cmdHandler } from "./utils/cmdHandler";
import { location, passengerType } from "./types";

// create a master vault which will store all the cards
const masterVault = vault()

export const vaultManager = (commands: string) => {
    const cmd = cmdHandler(commands);
    switch (cmd.command) {
        case 'BALANCE':
            return masterVault.balance(cmd.cardName as string, cmd.balance as number);
        case 'CHECK_IN':
            return masterVault.checkIn(cmd.cardName as string, cmd.passengerType as passengerType, cmd.location as location);
        case 'PRINT_SUMMARY':
            return masterVault.printSummary();
        default:
            return 'Invalid command';
    }
}