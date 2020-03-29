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
  case 'Set_Station_Number':
    return {
      ...state,
      ...action.stationNumber,
      ...generateStations(
        state.themeId,
        state.customerStations,
        action.stationNumber.stationNumber),
    };
  case 'Set_Theme_Image_Src':
    return {
      ...state,
      ...action.themeId
    }
  case 'Set_Main_Title':
    return {
      ...state,
      ...action.mainTitle
    }
  case 'Set_Selected_Station_Id':
    return {
      ...state,
      ...action.selectedStationId,
    }
  case 'Set_Selected_Station_Attribute':
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
