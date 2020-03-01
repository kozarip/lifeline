
/**
 * Save:
 * selected theme
 * stations number
 * station : [{image,text}...]
 */

export function changeTheme(themeId) {
  return {
    type: 'Change_Theme_Image_Src',
    themeId: { themeId }
  }
}

export function changeStationNumber(stationNumber) {
  return {
    type: 'Change_Station_Number',
    stationNumber: { stationNumber },
  }
}

export function changeSelectedThemeId(selectedStationId) {
  return {
    type: 'Change_Selected_Station_Id',
    selectedStationId: {selectedStationId},
  }
}

export function changeSelectedStationImage(image) {
  return {
    type: 'Change_Selected_Station_Attribute',
    image: { image },
  }
}

export function changeSelectedStationText(text) {
  return {
    type: 'Change_Selected_Station_Attribute',
    text: { text },
  }
}
