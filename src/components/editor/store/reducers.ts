import {
  generateStations,
  setAttributeForSelectedStation
} from '../../../utils/customer-station-helper';

export const initialState = {
  stationNumber: 0,
  themeId: 0,
  customerStations: [],
  selectedStationId: 0,
  mainTitle: 'Cím helye'
}

export function reducer(state = initialState, action) {
  console.log({'Received action': action});
  switch (action.type) {
  case 'Change_Station_Number':
    return {
      ...state,
      ...action.stationNumber,
      ...generateStations(
        state.themeId,
        state.customerStations,
        action.stationNumber.stationNumber),
    };
  case 'Change_Theme_Image_Src':
    return {
      ...state,
      ...action.themeId
    }
  case 'Change_Main_Title':
    return {
      ...state,
      ...action.mainTitle
    }
  case 'Change_Selected_Station_Id':
    return {
      ...state,
      ...action.selectedStationId,
    }
  case 'Change_Selected_Station_Attribute':
    return {
      ...state,
      ...setAttributeForSelectedStation(
        state.customerStations,
        state.selectedStationId,
        Object.keys(action.attribute)[0],
        action.attribute
      )
    }
  default:
    return state
  }
}
