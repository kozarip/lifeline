
import { ICustomerStation } from "interfaces/ICustomerStation";
import { THEMES } from 'constants/themes'

export function generateStations(themeId, stationNumber) {
  const stations: ICustomerStation[] = []
  const position = calculeteCustomerStationPositions(themeId, stationNumber)
  for (let i = 0; i < stationNumber; i++){
    stations.push({
      image: require('images/marker.png'),
      text: 'Ide irhatsz',
      position: position[i],
    })
  }
  return {
    customerStations: stations
  }
}

function calculeteCustomerStationPositions(themeId, stationNumber){
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
