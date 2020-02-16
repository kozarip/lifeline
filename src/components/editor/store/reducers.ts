import { IStation } from "interfaces/IStationFilter";
import { ICustomerStation } from "interfaces/ICustomerStation";

export const initialState = {
  stationNumber: 4,
  themeImageSrc: '',
  customerStations: [],
}

export function reducer(state = initialState, action) {
  switch (action.type) {
  case ('Change_Station_Number'):
    return {
      ...state,
      ...action.stationNumber,
      ...generateStations(action.stationNumber.stationNumber),
    };
  case ('Change_Theme_Image_Src'):
    return {
      ...state,
      ...action.themeImageSrc
    }
  default:
    return state
  }
}

function generateStations(stationNumber) {
  const stations: ICustomerStation[] = []
  for (let i = 0; i < stationNumber; i++){
    stations.push({
      image: require('images/marker.png'),
      text: 'Ide irhatsz'
    })
  }
  return {
    customerStations: stations
  }
}
