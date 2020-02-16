import { generateStations } from "../controllers/customer-station-helper";

export const initialState = {
  stationNumber: 0,
  themeId: 0,
  customerStations: [],
}

export function reducer(state = initialState, action) {
  switch (action.type) {
  case ('Change_Station_Number'):
    return {
      ...state,
      ...action.stationNumber,
      ...generateStations(initialState.themeId, action.stationNumber.stationNumber),
    };
  case ('Change_Theme_Image_Src'):
    return {
      ...state,
      ...action.themeId
    }
  default:
    return state
  }
}
