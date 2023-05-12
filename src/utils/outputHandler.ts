export const outputHandler = (stationCollection: any) => {
    // Calculate total collection and total discount
    const totalCollection = stationCollection.CENTRAL.collection + stationCollection.AIRPORT.collection;
    const totalDiscount = stationCollection.CENTRAL.discount + stationCollection.AIRPORT.discount;

    // Get passenger types for both stations
    const airportPassengerTypes = Object.keys(stationCollection.AIRPORT).filter(key => key !== "collection" && key !== "discount");
    const centralPassengerTypes = Object.keys(stationCollection.CENTRAL).filter(key => key !== "collection" && key !== "discount");

    // Calculate passenger counts for each passenger type at both stations
    const airportPassengerCounts = airportPassengerTypes.map(type => ({ type, count: stationCollection.AIRPORT[type] })).filter(item => item.count > 0);
    const centralPassengerCounts = centralPassengerTypes.map(type => ({ type, count: stationCollection.CENTRAL[type] })).filter(item => item.count > 0);

    // Sort passenger counts by count (descending)
    airportPassengerCounts.sort((a, b) => b.count - a.count);
    centralPassengerCounts.sort((a, b) => b.count - a.count);

    // Generate the output string
    const output = `TOTAL_COLLECTION CENTRAL ${stationCollection.CENTRAL.collection} ${stationCollection.CENTRAL.discount}\nPASSENGER_TYPE_SUMMARY\n${
        centralPassengerCounts.map(item => `${item.type} ${item.count}`).join('\n')
      }\nTOTAL_COLLECTION AIRPORT ${stationCollection.AIRPORT.collection} ${stationCollection.AIRPORT.discount}\nPASSENGER_TYPE_SUMMARY\n${
        airportPassengerCounts.map(item => `${item.type} ${item.count}`).join('\n')
      }\n`;
    console.log(output);
}