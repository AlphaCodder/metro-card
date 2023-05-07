// splits the command into proper arguments
export const cmdHandler = (commands: string) => {
	const [command, ...args] = commands.split(' ')
	if (command === 'BALANCE' && args.length === 3) {
		const [cardName, balance] = args;
		return { command, cardName, balance: Number(balance) }
	}
	if (command === 'CHECK_IN' && args.length === 4) {
		const [cardName, passengerType, location] = args;
		return { cardName, command, passengerType, location }
	}

	else return { command }
}