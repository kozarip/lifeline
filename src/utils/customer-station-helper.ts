
import { ICustomerStation } from 'interfaces/ICustomerStation';
import { THEMES } from 'constants/themes'

export function generateStations(
  themeId,
  customerStations: ICustomerStation[],
  stationNumber) {
  if (customerStations.length > 0
    && customerStations.length > Number(stationNumber)) {
    customerStations.length = Number(stationNumber);
  } else {
    const newStationNumber = customerStations.length > 0 ?
      stationNumber - customerStations.length
      : stationNumber
    const position = calculeteCustomerStationPositions(themeId, stationNumber)

    for (let i = 0; i < newStationNumber; i++){
      customerStations.push({
        image: require('images/marker.png'),
        text: 'Ide irhatsz',
        date: 'Dátum',
        position: position[i],
      })
    }
    for (let i = 0; i < customerStations.length; i++){
      customerStations[i].position = position[i];
    }
  }
  return {
    customerStations: customerStations
  }
}

function calculeteCustomerStationPositions(themeId, stationNumber) {

  const currentTheme = THEMES[themeId];
  const stationNumberLength = currentTheme.stationPositions.length
  const stationGap = stationNumberLength / stationNumber;
  //const shift = stationGap /2;
  const calculatedPositions: any = [];
  for (let i = 0; i < stationNumberLength; i += stationGap){
    calculatedPositions.push(currentTheme.stationPositions[Math.floor(i)]);
  }
  return calculatedPositions;
}

export function setAttributeForSelectedStation(
  customerStations,
  selectedStationId,
  selectedAttributeType,
  attribute) {
  if (selectedStationId) {
    customerStations[selectedStationId][selectedAttributeType] = attribute[selectedAttributeType];
    return {
      customerStations: customerStations
    }
  } else {
    alert('Kérlek elősször válaszd ki a szerkeszteni kívánt állomást');
  }
}
