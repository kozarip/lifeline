import {
  generateStations,
  setAttributeForSelectedStation
} from "../controllers/customer-station-helper";

export const initialState = {
  stationNumber: 0,
  themeId: 0,
  customerStations: [],
  selectedStationId: 0,
}

export function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
  case ('Change_Station_Number'):
    return {
      ...state,
      ...action.stationNumber,
      ...generateStations(
        state.themeId,
        state.customerStations,
        action.stationNumber.stationNumber),
    };
  case ('Change_Theme_Image_Src'):
    return {
      ...state,
      ...action.themeId
    }
  case ('Change_Selected_Station_Id'):
    return {
      ...state,
      ...action.selectedStationId,
    }
  case ('Change_Selected_Station_Attribute'):
    return {
      ...state,
      ...setAttributeForSelectedStation(
        state.customerStations,
        state.selectedStationId,
        action.image ? action.image : action.text)
    }
  default:
    return state
  }
}
