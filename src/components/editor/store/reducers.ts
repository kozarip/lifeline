export const initialState = {
  stationNumber: 0,
  themeImageSrc: '',
}

export function reducer(state = initialState, action) {
  switch (action.type) {
  case ('Change_Station_Number'):
    return {
      ...state,
      ...action.stationNumber
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
